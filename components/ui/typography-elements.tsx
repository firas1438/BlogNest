import * as React from "react"

export function TypographyH1({ children, className = "", ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={`scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance ${className}`} {...props}>
      {children}
    </h1>
  )
}

export function TypographyH2({ children, className = "", ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`} {...props}>
      {children}
    </h2>
  )
}

export function TypographyH3({ children, className = "", ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`} {...props}>
      {children}
    </h3>
  )
}

export function TypographyH4({ children, className = "", ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`} {...props}>
      {children}
    </h4>
  )
}

export function TypographyP({ children, className = "", ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`} {...props}>
      {children}
    </p>
  )
}

export function TypographyBlockquote({ children, className = "", ...props }: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote className={`mt-6 border-l-2 pl-6 italic ${className}`} {...props}>
      {children}
    </blockquote>
  )
}


export function TypographyInlineCode({ children, className = "", ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={`relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${className}`}
      {...props}
    >
      {children}
    </code>
  )
}

export function TypographyList({ children, className = "", ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={`my-6 ml-6 list-disc [&>li]:mt-2 ${className}`} {...props}>
      {children}
    </ul>
  )
}

export function TypographyTable({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`my-6 w-full overflow-x-auto ${className}`} {...props}>
      <table className="w-full">
        {children}
      </table>
    </div>
  )
}

