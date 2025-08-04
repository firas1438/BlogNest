import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface BlogPostCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  authorName: string;
  authorAvatarSrc: string;
  readTime: string;
  tags: string[];
}

export function BlogPostCard({
  imageSrc,
  imageAlt,
  title,
  description,
  authorName,
  authorAvatarSrc,
  readTime,
  tags
}: BlogPostCardProps) {
  return (
    <div className="bg-card text-card-foreground overflow-hidden rounded-lg border">
      <div className="relative h-48 w-full">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
        {/* Tags Overlay */}
        {tags?.length > 0 && (
          <div className="absolute bottom-0 left-0 flex flex-wrap gap-2 p-3">
            {tags.map((tag, idx) => (
              <Badge
                key={idx}
                className="bg-neutral-300/50 backdrop-blur-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div className="grid gap-2 p-4">
        <h3 className="text-lg leading-tight font-semibold">{title}</h3>
        <p className="text-muted-foreground line-clamp-3 text-sm">{description}</p>

        {/* Author Info */}
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <Avatar className="h-6 w-6">
            <AvatarImage src={authorAvatarSrc || "/placeholder.svg"} />
            <AvatarFallback>
              {authorName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <span>{authorName}</span>
          <span>•</span>
          <span>{readTime} read</span>
        </div>
      </div>
    </div>
  );
}
