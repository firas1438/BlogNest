import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CTABanner() {
  return (
      <div className="dark:border relative overflow-hidden my-6 w-full dark bg-background text-foreground  mx-auto rounded-2xl py-10 md:py-16 px-6 md:px-14">
        <AnimatedGridPattern numSquares={50} maxOpacity={0.1} duration={3} className={cn( "[mask-image:radial-gradient(400px_circle_at_right,white,rgba(255,255,255,0.6),transparent)]", "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12" )}/>
        <AnimatedGridPattern numSquares={50} maxOpacity={0.1} duration={3} className={cn( "[mask-image:radial-gradient(400px_circle_at_top_left,white,rgba(255,255,255,0.6),transparent)]", "inset-x-0 inset-y-0 h-[200%] skew-y-12" )}/>
        <div className="relative z-0 flex flex-col gap-3">
          <h3 className="text-2xl lg:text-3xl font-semibold">
            Dive Deeper into Developer Insights
          </h3>
          <p className="mt-2 text-base ">
            Stay ahead with in-depth articles on modern tech stacks, real-world coding practices, and the tools shaping tomorrows software. 
            Explore now and fuel your learning!
          </p>
        </div>
        <div className="relative z-0 mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/blogs">
            <Button size="lg">
              Start Reading <ArrowUpRight className="!h-5 !w-5" />
            </Button>
          </Link>

        </div>
      </div>
  );
}