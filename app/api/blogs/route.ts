import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/blog";

// GET blogs with optional limit
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    // default to 0 (no limit)
    const limit = parseInt(searchParams.get("limit") || "0") || 0; 

    await connectDB();
    // newest first + u can apply limit
    const blogs = await Blog.find().sort({ createdAt: -1 }).limit(limit > 0 ? limit : 0);

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}

// POST new blog
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const blog = await Blog.create({...body,});

    return NextResponse.json({ blog }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}
