import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/blog";

// GET blogs
export async function GET() {
  try {
    await connectDB(); 
    const blogs = await Blog.find().sort({ createdAt: -1 }); // fetch blogs, newest first
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
    const blog = await Blog.create(body);
    return NextResponse.json({ blog }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
  }
}

