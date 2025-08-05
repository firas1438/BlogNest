import mongoose, { Schema, model, models } from "mongoose";

export interface BlogDocument {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  authorName: string;
  authorAvatarSrc: string;
  readTime: string;
  tags: string[];
  views: number;
}

const BlogSchema = new Schema<BlogDocument>(
  {
    imageSrc: { type: String, required: true },
    imageAlt: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    authorName: { type: String, required: true },
    authorAvatarSrc: { type: String, required: false },
    readTime: { type: String, required: true },
    tags: { type: [String], required: true },
    views: { type: Number, default: 0 },
  },
  {
    timestamps: true, 
  }
);

// Prevent model overwrite issues in development
const Blog = mongoose.models?.Blog || model<BlogDocument>("Blog", BlogSchema);

export default Blog;
