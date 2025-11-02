// components/loading.tsx
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-pulse">
        <Image src="/BlogNestLogo.png" alt="BlogNest Logo" className="dark:invert-100" width={50} height={50} priority />
      </div>
    </div>
  );
}
