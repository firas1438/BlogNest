'use client';

import { useQuery } from '@tanstack/react-query';
import { Badge } from "@/components/ui/badge";
import { FeaturedPostSidebarItem } from "@/components/featured-post-sidebar-item";
import Link from 'next/link';
import { Button } from './ui/button';
import { Skeleton } from "@/components/ui/skeleton";
import { AlertTriangle } from 'lucide-react';

interface Blog {
  _id: string;
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];
  views: number;
}

// fetch featured blogs (limit 6)
const fetchFeaturedBlogs = async (): Promise<Blog[]> => {
  const res = await fetch('/api/blogs?limit=6');
  if (!res.ok) throw new Error('Failed to fetch blogs');
  return res.json();
};

export default function FeaturedPage() {
  const { data: blogs, isLoading, isError } = useQuery({
    queryKey: ['featuredBlogs'],
    queryFn: fetchFeaturedBlogs
  });

  // skeleton
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg md:h-[500px] lg:col-span-2">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="bg-card text-card-foreground space-y-6 rounded-lg border p-6 lg:col-span-1">
          <Skeleton className="h-6 w-1/3" />
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-16 w-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // error
  if (isError || !blogs || blogs.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold flex items-center justify-center gap-2 text-destructive mb-4">
            Blogs Not Found
            <AlertTriangle className="h-6 w-6" />
          </h2>
          <p className="text-md text-foreground mb-6">
            Sorry, we couldn&apos;t load featured posts.
          </p>
          <Button asChild variant="outline">
            <Link href="/blogs">Back to Blogs</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Sort by views to get most viewed articles
  const sortedBlogs = [...blogs].sort((a, b) => b.views - a.views);
  const [mostViewed, ...otherBlogs] = sortedBlogs;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

      {/* 1st most viewed article */}
      <Link href={`/blogs/${mostViewed._id}`} className="block relative h-[400px] overflow-hidden rounded-lg shadow-lg md:h-[500px] lg:col-span-2 group">
        {/* image */}
        <img src={mostViewed.imageSrc} alt={mostViewed.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
          {/* tags */}
          {mostViewed.tags.length > 0 && ( 
            <div className="mb-4 flex flex-wrap gap-2">
              {mostViewed.tags.map((tag, index) => (
                <Badge key={index} className="bg-white/20 text-white backdrop-blur-sm">
                  {tag}
                </Badge> 
              ))}
            </div>
          )}
          {/* title */}
          <h2 className="text-2xl leading-tight font-bold md:text-3xl mb-2 ">
            {mostViewed.title}
          </h2>
          {/* description */}
          <p className="text-white/90">{mostViewed.description}</p>
        </div>
      </Link>

      {/* other articles */}
      <div className="bg-card text-card-foreground space-y-6 rounded-lg border p-6 lg:col-span-1">
        <h3 className="text-xl font-semibold">Other featured posts</h3>
        <div className="space-y-4">
          {otherBlogs.slice(0, 5).map((blog) => (
            <Link key={blog._id} href={`/blogs/${blog._id}`} className="block rounded-lg hover:bg-accent/100">
              <FeaturedPostSidebarItem imageSrc={blog.imageSrc} imageAlt={blog.title}  title={blog.title}/>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}