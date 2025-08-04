import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { GithubIcon, LogInIcon } from "lucide-react";
import { HeaderSearch } from "@/components/search";

export function SiteHeader() {
  return (
    <header className="bg-background/95 border-border/70 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur lg:px-14 md:px-12">
      <div className="grid h-16 grid-cols-3 items-center justify-between px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="text-muted-foreground mt-0.5 text-[10px] tracking-widest uppercase select-none">
              Beta
            </span>
          </Link>
        </div>
        <nav className="flex items-center justify-center">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>

          <Button variant="ghost" asChild>
            <Link href="/blogs">Blogs</Link>
          </Button>
          
          <Button variant="ghost" asChild>
            <Link href="https://github.com/shadcn-examples" target="_blank"> Github </Link>
          </Button>
        </nav>
        <div className="flex items-center justify-between space-x-2 md:justify-end">
          {/* Searchbox */}
          <HeaderSearch />
          <nav className="flex items-center">
            {/* Github icon */}
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/shadcn-examples" target="_blank">
                <GithubIcon />
              </Link>
            </Button>
            {/* Theme switcher icon */}
            <ThemeToggle />
            {/* Login icon */}
            <Button variant="ghost" size="icon" asChild>
              <Link href="/login" className="text-foreground">
                <LogInIcon/>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}