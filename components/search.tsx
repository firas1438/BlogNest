"use client";

import * as React from "react";
import { SearchIcon } from "lucide-react";
import { CommandDialog, CommandEmpty, CommandInput, CommandList} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function HeaderSearch() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div className="lg:*:not-first:mt-2">
        <div className="relative hidden lg:flex">
          <Input
            className="peer ps-9 pe-9"
            placeholder="Search blogs..."
            type="search"
            onFocusCapture={() => setOpen(true)}
          />
          <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
            <SearchIcon size={16} />
          </div>
        </div>
        <div className="relative flex lg:hidden">
          <Button variant="ghost" onClick={() => setOpen(true)}>
            <SearchIcon />
          </Button>
        </div>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search in list" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

        </CommandList>
      </CommandDialog>
    </>
  );
}