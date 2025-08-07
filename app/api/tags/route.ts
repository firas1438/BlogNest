import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/blog";

// GET /api/tags
export async function GET() {
  try {
    await connectDB();
    // gets all unique tags from blog collection
    const tags = await Blog.distinct("tags"); 
    return NextResponse.json(tags);
  } catch (error) {
    console.error("Error fetching tags:", error);
    return NextResponse.json({ error: "Failed to fetch tags" }, { status: 500 });
  }
}
