import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface BlogPostCardProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  authorName: string
  readTime: string
  tags: string[]
  views: number
}

export function BlogPostCard({ imageSrc, imageAlt, title, description, authorName, readTime, tags, views }: BlogPostCardProps) {
  return (
    <Card className="bg-card text-card-foreground overflow-hidden rounded-lg border transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 w-full">
        <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
        {/* gradient effect */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/70 to-transparent" />
        {/* tags overlay */}
        {tags?.length > 0 && (
          <div className="absolute bottom-0 left-0 flex flex-wrap gap-2 p-3">
            {tags.map((tag, idx) => (
              <Badge key={idx} className="bg-muted/80 text-foreground backdrop-blur-sm" >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div className="grid gap-3 p-4">
        <h3 className="text-lg leading-tight font-semibold">{title}</h3>
        <p className="text-muted-foreground line-clamp-3 text-sm">
          {description}
        </p>

        {/* author info */}
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <Avatar className="h-6 w-6">
            <AvatarFallback>
              {authorName.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <span>{authorName}</span>
          <span>❖</span>
          <span>{readTime} min read</span>
          <span>❖</span>
          <span className="flex items-center gap-1.5">{views} views</span>
        </div>
      </div>
    </Card>
  )
}
