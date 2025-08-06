import mongoose, { Schema, model, models } from "mongoose";

export interface BlogDocument {
  imageSrc: string;
  title: string;
  description: string;
  authorName: string;
  readTime: string;
  tags: string[];
  views: number;
  content: any;
}

const BlogSchema = new Schema<BlogDocument>(
  {
    imageSrc: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    authorName: { type: String, default: "Firas Benali" },
    readTime: { type: String, required: true },
    tags: { type: [String], required: true },
    views: { type: Number, default: 0 },
    content: { type: Schema.Types.Mixed, required: true }, 
  },
  {
    timestamps: true,
  }
);

// prevent model overwrite issues in development
const Blog = models?.Blog || model<BlogDocument>("Blog", BlogSchema);

export default Blog;
