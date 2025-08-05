import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb'; // adjust based on your setup
import Blog from '@/models/blog';

// GET blog by id
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const blog = await Blog.findById(params.id);
    if (!blog) { return NextResponse.json({ message: 'Blog not found' }, { status: 404 }); }
    return NextResponse.json(blog);
    
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}


// PATCH view counter
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();

    const blog = await Blog.findByIdAndUpdate( params.id, { $inc: { views: 1 } }, { new: true } );

    if (!blog) { return NextResponse.json({ message: 'Blog not found' }, { status: 404 }); }

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
