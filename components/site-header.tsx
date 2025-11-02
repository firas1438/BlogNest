import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { GithubIcon } from "lucide-react";
import { LoginDialog } from "./login-dialog";

export function SiteHeader() {
  return (
    <header className="bg-background/95 border-border/70 sticky top-0 z-50 w-full border-b backdrop-blur lg:px-20 md:px-12">
      <div className="flex h-16 items-center justify-between px-4">
        {/* left side */}
        <Link href="/" className="flex items-center space-x-2">
          <Logo /> <span className="text-muted-foreground mt-0.5 text-[10px] tracking-widest uppercase select-none"> Beta </span>
        </Link>

        {/* right side */}
        <div className="flex items-center lg:space-x-2">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/blogs">Blogs</Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/firas1438/BlogNest" target="_blank">
              <GithubIcon />
            </Link>
          </Button>
          <ThemeToggle />
          <LoginDialog />
        </div>
      </div>
    </header>
  );
}