import { Badge } from "@/components/ui/badge";
import { FeaturedPostSidebarItem } from "@/components/featured-post-sidebar-item";
import RecentPostsPage from "./recentposts-section";
import Categories from "./categories";
import CTABanner from "./cta-section";
import Blog from "@/models/blog";
import FeaturedPage from "./featuredposts-section";

interface Blog {
  _id: string;
  imageSrc: string;
  title: string;
  tags: string[];
  views: number;
}

export default function InfoPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-8 lg:px-24">

      {/* Categories Section */}
      <div className="mb-12">
        <Categories />
      </div>

      {/* Featured Posts Section */}
      <div className="mb-12">
        <FeaturedPage />  
      </div>

      {/* Recent Posts Section */}
      <div className="mt-12">
        <RecentPostsPage/>
      </div>

      {/* CTA Section */}
      <div className="mt-12">
        <CTABanner/>
      </div>
    </div>
  );
}