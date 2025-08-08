import * as React from "react";
import { Separator } from "./separator";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


export function TypographyH1({ children, className = "", ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={`scroll-m-20 mt-6 text-4xl font-extrabold tracking-tight text-balance ${className}`} {...props}>
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className = "", ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={`scroll-m-20 border-b mt-6 text-3xl font-semibold tracking-tight first:mt-0 ${className}`} {...props}>
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className = "", ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <div>
      <h3 className={`scroll-m-20 text-2xl mt-6 font-semibold tracking-tight ${className}`} {...props}>
        {children}
      </h3>
      <Separator className="mb-4"/>
    </div>
  );
}

export function TypographyH4({ children, className = "", ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 className={`scroll-m-20 text-xl mt-5 mb-2 font-semibold tracking-tight ${className}`} {...props}>
      {children}
    </h4>
  );
}

export function TypographyP({ children, className = "", ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-1 ${className}`} {...props}>
      {children}
    </p>
  );
}

export function TypographyBlockquote({ children, className = "", ...props }: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote className={`mt-6 border-l-2 pl-6 italic ${className}`} {...props}>
      {children}
    </blockquote>
  );
}

export function TypographyInlineCode({ children, className = "", ...props }: React.HTMLAttributes<HTMLElement> & { children: string }) {
  return (
    <code className={`relative rounded py-[0.2rem] font-mono text-sm font-extrabold ${className}`} {...props}>
      <SyntaxHighlighter style={vscDarkPlus} language="typescript" PreTag="span" customStyle={{ background: 'none', padding: 0, margin: 0, display: 'inline', }}>
        {children}
      </SyntaxHighlighter>
    </code>
  );
}

export function TypographyList({ children, className = "", ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={`mt-3 ml-6 list-disc [&>li]:mt-2 ${className}`} {...props}>
      {children}
    </ul>
  );
}

export function TypographyTable({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mt-4 w-full overflow-x-auto ${className}`} {...props}>
      <table className="w-full text-left border-separate border-spacing-y-2">
        {children}
      </table>
    </div>
  );
}