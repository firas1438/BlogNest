'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BlogPostCard } from '@/components/blog-post-card';
import { Skeleton } from '@/components/ui/skeleton';

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
}

// Fetch recent blogs
const fetchRecentBlogs = async (): Promise<Blog[]> => {
  const res = await fetch('/api/blogs?limit=3');
  if (!res.ok) throw new Error('Failed to fetch recent blogs');
  return res.json();
};

export default function RecentPostsPage() {
  const { data: recentBlogs = [], isLoading, isError } = useQuery({
    queryKey: ['recentBlogs'],
    queryFn: fetchRecentBlogs,
  });

  return (
    <div>
      <div className="flex-1">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Recent Posts</h2>
          <Button variant="outline" asChild>
            <Link href="/blogs">All Posts</Link>
          </Button>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-card text-card-foreground overflow-hidden rounded-lg border">
                <Skeleton className="h-48 w-full" />
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
            ))}
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="flex items-center justify-center min-h-[50vh]">
            <p className="text-destructive text-lg text-center">
              Failed to load recent posts
            </p>
          </div>
        )}

        {/* Blog Cards */}
        {!isLoading && !isError && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentBlogs.map((blog) => (
              <Link key={blog._id} href={`/blogs/${blog._id}`}>
                <BlogPostCard
                  imageSrc={blog.imageSrc}
                  imageAlt={blog.imageAlt || 'Blog Banner'}
                  title={blog.title}
                  description={blog.description}
                  authorName={blog.authorName}
                  authorAvatarSrc={blog.authorAvatarSrc || '/placeholder.svg'}
                  readTime={blog.readTime}
                  tags={blog.tags}
                  views={blog.views}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}