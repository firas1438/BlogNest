import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { GithubIcon } from "lucide-react";
import { LoginDialog } from "./login-dialog";

export function SiteHeader() {
  return (
    <header className="bg-background/95 border-border/70 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur lg:px-20 md:px-12">
      <div className="grid h-16 grid-cols-3 items-center justify-between px-4">
        <div className=" flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="text-muted-foreground mt-0.5 text-[10px] tracking-widest uppercase select-none">
              Beta
            </span>
          </Link>
        </div>
        <nav className="flex items-center justify-center"></nav>
        <div className="flex items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            {/* Homepage */}
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>

            {/* Blogs page */}
            <Button variant="ghost" asChild>
              <Link href="/blogs">Blogs</Link>
            </Button>

            {/* Github */}
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/firas1438/BlogNest" target="_blank">
                <GithubIcon />
              </Link>
            </Button>

            {/* Theme Switcher */}
            <ThemeToggle />

            {/* Login */}
            <LoginDialog />
          </nav>
        </div>
      </div>
    </header>
  );
}