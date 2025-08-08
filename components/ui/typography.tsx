import { TypographyH1 ,TypographyH2, TypographyH3, TypographyH4, TypographyP, TypographyBlockquote, TypographyInlineCode, TypographyList, TypographyTable } from "@/components/ui/typography-elements"
import { Separator } from "./separator"
import { cn } from "@/lib/utils"

export const mdxComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <TypographyH1 {...props} className={cn(className)} />
  ),

  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <TypographyH2 {...props} className={cn(className)} />
  ),

  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <TypographyH3 {...props} className={cn(className)} />
  ),

  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <TypographyH4 {...props} className={cn(className)} />
  ),

  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <TypographyP {...props} className={cn(className)} />
  ),

  blockquote: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <TypographyBlockquote {...props} className={cn(className)} />
  ),

  ul: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLUListElement>) => (
    <TypographyList {...props} className={cn(className)} />
  ),

  ol: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />
  ),

  
  code: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLElement>) => (
    // @ts-ignore
    <TypographyInlineCode {...props} className={cn(className)} />
  ),

  pre: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border py-4 px-6",
        className
      )}
      {...props}
    />
  ),

  table: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableElement>) => (
    <TypographyTable {...props} className={cn(className)} />
  ),

  hr: () => <Separator className="my-4" />,

  a: ({
    className,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        "font-medium text-primary underline underline-offset-4",
        className
      )}
      {...props}
    />
  ),
  
  img: ({
    className,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className={cn("rounded-xl my-4 max-w-full", className)} {...props} />
  ),
  
}
