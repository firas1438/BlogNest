import { Button } from "@/components/ui/button";
import Link from "next/link";

const data = [
  { href: "ai", meta: { title: "AI" }, isComing: false },
  { href: "react", meta: { title: "React" }, isComing: false },
  { href: "nextjs", meta: { title: "Next.js" }, isComing: false },
  { href: "devops", meta: { title: "DevOps" }, isComing: false },
  { href: "rust", meta: { title: "Rust" }, isComing: true },
  { href: "ml", meta: { title: "Machine Learning" }, isComing: true },
];

export default function Categories() {
  return (
    <div className="container mx-auto  space-y-4 pt-12">
      <div>
        <h2 className="text-2xl font-bold">Looking for a specific category?</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {data.map((item) => (
          <Button key={item.href} variant="outline" className="rounded-full" asChild={!item?.isComing} disabled={!!item?.isComing}>
            <Link href={`/${item.href}`}>
              {item.meta.title} {item?.isComing ? "(Soon)" : ""}
            </Link>
          </Button>
        ))}
      </div>
    </div>

  );
}
