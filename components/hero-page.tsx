import Categories from "@/components/categories";
import Spline3D from "./spline";


export default function HeroPage() {
  return (
    <div className="container mx-auto space-y-10 px-4 pt-18 pb-8">
      <header className="mx-auto max-w-3xl space-y-4 text-center">
        <h1 className="text-3xl font-semibold lg:text-5xl lg:leading-14">
          Welcome to BlogNest
        </h1>
        <p className="text-muted-foreground mx-auto max-w-3xl lg:text-lg">
          Discover thoughtful articles, tutorials, and insights on web development, design, AI, DevOps, and more — all in one blog nest.
        </p>
      </header>

      {/* 3d model */}
      <div className="flex items-center justify-center w-full overflow-hidden relative lg:h-[340px] md:h-[280px] sm:h-[250px] h-[200px] ">
          <div className="scale-50 sm:scale-75 md:scale-80 lg:scale-100 xl:scale-100 origin-center  transition-transform duration-400 ease-in-out">
            <Spline3D />
          </div>
      </div>

    </div>
  );
}