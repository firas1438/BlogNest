import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t lg:px-14 md:px-12">
      <div className="px-4 py-6 md:py-8">
        <div className="flex items-center justify-between gap-8">
          <div className="flex flex-col gap-4 md:max-w-96">
            <div className="flex items-center gap-2">
              <Logo />
            </div>
          </div>

          <div className="md:ms-auto md:max-w-96">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-muted-foreground text-xs">
                © {new Date().getFullYear()} BlogNest.{" "}
                <span className="hidden md:inline">All rights reserved.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}