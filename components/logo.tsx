import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="relative size-5">
        <Image className="dark:invert" src={`/BlogNestLogo.png`} fill alt="Blog Nest Logo"/>
      </div>
      <span className="hidden font-medium md:inline">BlogNest</span>
    </div>
  );
}