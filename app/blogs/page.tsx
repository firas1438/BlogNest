'use client';

import { useQuery } from '@tanstack/react-query';
import { BlogPostCard } from '@/components/blog-post-card';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';

interface Blog {
  _id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  authorName: string;
  authorAvatarSrc?: string;
  readTime: string;
  tags: string[];
  views: number;
  createdAt: Date;
}

const fetchBlogs = async (): Promise<Blog[]> => {
  const res = await fetch('/api/blogs');
  if (!res.ok) throw new Error('Failed to fetch blogs');
  return res.json();
};

function BlogCardSkeleton() {
  return (
    <div className="bg-card text-card-foreground overflow-hidden rounded-lg border">
      <div className="relative h-48 w-full"><Skeleton className="h-full w-full" /></div>
      <div className="grid gap-2 p-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-10" />
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const { data: blogs, isLoading, isError } = useQuery({ queryKey: ['blogs'], queryFn: fetchBlogs });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const allTags = Array.from(new Set(blogs?.flatMap(blog => blog.tags) || []));
  const filteredBlogs = blogs?.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || blog.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => blog.tags.includes(tag));
    return matchesSearch && matchesTags;
  }) || [];
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const currentBlogs = filteredBlogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedTags]);

  const toggleTag = (tag: string) => setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  const clearFilters = () => { setSearchTerm(''); setSelectedTags([]); };

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-24 min-h-screen">
      <div className="mb-8">

        {/* searchbox */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold">Latest Blogs</h1>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search blogs..." className="pl-9" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            {searchTerm && (
              <Button variant="ghost" size="sm" className="absolute right-2 top-1/2 -translate-y-1/2" onClick={() => setSearchTerm('')}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* tags */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Badge key={tag} variant={selectedTags.includes(tag) ? 'default' : 'outline'} className="cursor-pointer hover:bg-primary/10 py-2" onClick={() => toggleTag(tag)}>
                {tag}
              </Badge>
            ))}
            {selectedTags.length > 0 && (
              <Button variant="ghost" size="sm" className="ml-2 h-8 px-3 text-xs text-red-400" onClick={clearFilters}>
                <X className="ml-1 h-3 w-3" />
                Clear
              </Button>
            )}
          </div>
        </div>

      </div>

      {isLoading ? (
        // loading
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => <BlogCardSkeleton key={i} />)}
        </div>
      ) : isError ? (
        // errors
        <p className="mt-4 text-red-400">Failed to load blogs.</p>
      ) : !filteredBlogs || filteredBlogs.length === 0 ? ( 
        // filtering
        <div className="text-center py-36 justify-center">
          <p className="text-red-400">No blogs found matching your criteria.</p>
          <Button variant="outline" className="mt-4 text-red-400" onClick={clearFilters}>
            <X className="ml-1 h-3 w-3" />
            Clear search
          </Button>
        </div>
      ) : (
        // all blogs
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentBlogs.map(blog => (
              <Link key={blog._id} href={`/blogs/${blog._id}`}>
                <BlogPostCard imageSrc={blog.imageSrc} imageAlt={blog.imageAlt} title={blog.title} description={blog.description} authorName={blog.authorName} authorAvatarSrc={blog.authorAvatarSrc || '/placeholder.svg'} readTime={blog.readTime} tags={blog.tags} views={blog.views} />
              </Link>
            ))}
          </div>
          {/* pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>Previous</Button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <Button key={i} variant={currentPage === i + 1 ? 'default' : 'outline'} size="sm" onClick={() => setCurrentPage(i + 1)}>{i + 1}</Button>
              ))}
              <Button variant="outline" size="sm" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>Next</Button>
            </div>
          )}

        </>
      )}
    </div>
  );
}
