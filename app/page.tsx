import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { BlogPostCard } from "@/components/blog-post-card";
import { FeaturedPostSidebarItem } from "@/components/featured-post-sidebar-item";
import HeroPage from "@/components/hero-page";
import InfoPage from "@/components/info-page";

export default function HomePage() {
  return (
    // <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
    <div>
      <HeroPage/>
      <InfoPage/>
    </div>
  );
}