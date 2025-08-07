"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "./ui/skeleton";

// fetch tags
async function fetchTags(): Promise<string[]> {
  const res = await fetch("/api/tags");
  if (!res.ok) throw new Error("Failed to fetch tags");
  return res.json();
}

export default function Categories() {
  const { data: tags = [], isLoading, isError } = useQuery({ queryKey: ["tags"], queryFn: fetchTags, });

  return (
    <div className="container mx-auto space-y-5 pt-12">
      <div> <h2 className="text-2xl font-bold">This & many more topics!</h2> </div>

      {isLoading && (
        <div className="flex flex-wrap gap-3">
          {Array.from({ length: 20 }).map((_, index) => (
            <Skeleton
              key={index}
              className="h-9 w-24 rounded-full bg-muted"
            />
          ))}
        </div>
      )}

      {isError && <p className="text-red-500">Failed to load categories</p>}

      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Button key={tag} variant="outline" className="rounded-full">
              {tag}
          </Button>
        ))}
      </div>
      
    </div>
  );
}
