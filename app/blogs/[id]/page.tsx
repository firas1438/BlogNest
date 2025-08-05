'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/seperator';

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
  createdAt: string;
}

const fetchBlogById = async (id: string): Promise<Blog> => {
  const res = await fetch(`/api/blogs/${id}`);
  if (!res.ok) throw new Error('Failed to fetch blog');
  return res.json();
};

export default function BlogDetailPage() {
  const { id } = useParams() as { id: string };
  const { data: blog, isLoading, isError } = useQuery<Blog, Error>({ queryKey: ['blog', id], queryFn: () => fetchBlogById(id), enabled: !!id, });

  {/* loading skeleton */}
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <Skeleton className="h-96 w-full" />
            <Skeleton className="h-16 w-full" />
            <Separator/>
            <Skeleton className="h-64 w-full" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-52 w-full" />
            <Skeleton className="h-52 w-full" />
          </div>
        </div>
      </div>
    );
  }

  {/* error message */}
  if (isError || !blog) {
    return <p className="text-center text-red-500">Blog not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* left column - blog content */}
        <div className="lg:col-span-2">
          <img
            src={blog.imageSrc}
            alt={blog.imageAlt}
            className="w-full h-auto max-h-[400px] object-cover rounded-2xl mb-8"
          />
          <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
          <Separator/>
          <div className="prose max-w-none mt-6">
            <p className="text-lg leading-relaxed whitespace-pre-line">{blog.description}</p>
          </div>
        </div>

        {/* right column - additional info */}
        <div className="space-y-5">

          {/* article details */}
          <div className="bg-muted/50 p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Article Details</h2>

            {/* publisher */}
            <div className="flex items-center gap-4 mb-5">
              <Avatar className="h-12 w-12">
                {blog.authorAvatarSrc ? (
                  <AvatarImage src={blog.authorAvatarSrc} />
                ) : (
                  <AvatarFallback>
                    {blog.authorName.charAt(0).toUpperCase()}
                  </AvatarFallback>
                )}
              </Avatar>
              <div>
                <p className="font-medium">{blog.authorName}</p>
                <p className="text-sm text-muted-foreground">Author</p>
              </div>
            </div>

            {/* extra info */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Published</span>
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Read time</span>
                <span>{blog.readTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Views</span>
                <span>{blog.views.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* description */}
          <div className="bg-muted/50 p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <div className="flex flex-wrap gap-2">
              {blog.description}
            </div>
          </div>

          {/* tags */}
          <div className="bg-muted/50 p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag: string, i: number) => (
                <span key={i} className="bg-muted px-3 py-1.5 text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
