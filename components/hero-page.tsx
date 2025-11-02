import SplineModel from "./spline";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function HeroPage() {
  return (
    <div className="container mx-auto space-y-10 px-4 lg:pt-20 pt-16 pb-4">
      {/* bottom right */}
      <AnimatedGridPattern numSquares={50} maxOpacity={0.1} duration={3} className={cn( "mask-[radial-gradient(500px_circle_at_right,white,rgba(255,255,255,0.6),transparent)]", "inset-x-0 inset-y-[-12%] h-full skew-y-12 dark:opacity-60" )} />
      {/* top left */}
      <AnimatedGridPattern numSquares={50} maxOpacity={0.1} duration={3} className={cn( "mask-[radial-gradient(600px_circle_at_top_left,white,rgba(255,255,255,0.6),transparent)]", "inset-x-0 lg:inset-y-[16%] inset-y-[-50%] skew-y-12 dark:opacity-60" )}/>
      <header className="mx-auto max-w-3xl space-y-8 lg:space-y-4 text-center">
        <h1 className="text-3xl font-semibold lg:text-5xl lg:leading-14">
          Welcome to BlogNest!
        </h1>
        <p className="text-muted-foreground mx-auto max-w-4xl lg:text-lg">
          Discover thoughtful articles, tutorials, and insights on web
          development, design, AI, DevOps, and more - all in one blog nest.
        </p>
      </header>
      {/* 3d model */}
      <div className="flex items-center justify-center w-full overflow-hidden relative lg:h-[340px] md:h-[280px] sm:h-[260px] h-[220px] ">
        <div className="scale-[0.4] sm:scale-75 md:scale-80 lg:scale-100 xl:scale-100 origin-center transition-transform duration-400 ease-in-out">
          <SplineModel/>
        </div>
      </div>
    </div>
  );
}
