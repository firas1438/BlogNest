'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { BlogDocument } from '@/models/blog';

export default function AddBlogPage() {
  const router = useRouter();

  const [form, setForm] = useState<Partial<BlogDocument>>({
    title: '',
    description: '',
    imageSrc: '',
    authorName: '',
    readTime: 0,
    tags: [],
    content: '',
  });

  const [tagInput, setTagInput] = useState('');
  const [uploadStatus, setUploadStatus] = useState<{ message: string; type: 'success' | 'error' | null }>({
    message: '',
    type: null,
  });

  const handleChange = (field: keyof BlogDocument, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleTagAdd = () => {
    if (!tagInput.trim()) return;
    setForm((prev) => ({
      ...prev,
      tags: [...(prev.tags || []), tagInput.trim()],
    }));
    setTagInput('');
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setUploadStatus({ message: 'No file selected', type: 'error' });
      return;
    }
    if (file.type !== 'text/markdown' && !file.name.endsWith('.md')) {
      setUploadStatus({ message: 'Please select a valid Markdown (.md) file', type: 'error' });
      return;
    }

    try {
      const text = await file.text();
      setForm((prev) => ({ ...prev, content: text }));
      setUploadStatus({ message: 'Markdown file uploaded successfully', type: 'success' });
      // Reset file input to allow re-uploading the same file
      e.target.value = '';
    } catch (error) {
      console.error('Error reading file:', error);
      setUploadStatus({ message: 'Failed to read Markdown file', type: 'error' });
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        router.refresh();
        router.push('/blogs');
      } else {
        const errorData = await res.json();
        setUploadStatus({ message: errorData.error || 'Failed to post blog', type: 'error' });
      }
    } catch (err) {
      console.error('Error posting blog:', err);
      setUploadStatus({ message: 'Failed to post blog', type: 'error' });
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Create a New Blog</h1>
      <div className="grid gap-6">
        {/* Blog Info Inputs */}
        <div className="grid gap-4">
          <Label>Title</Label>
          <Input value={form.title} onChange={(e) => handleChange('title', e.target.value)} />

          <Label>Description</Label>
          <Textarea value={form.description} onChange={(e) => handleChange('description', e.target.value)} />

          <Label>Image URL</Label>
          <Input value={form.imageSrc} onChange={(e) => handleChange('imageSrc', e.target.value)} />

          <Label>Author Name</Label>
          <Input value={form.authorName} onChange={(e) => handleChange('authorName', e.target.value)} />

          <Label>Read Time (e.g., 5 min read)</Label>
          <Input value={form.readTime} onChange={(e) => handleChange('readTime', e.target.value)} />
        </div>

        {/* Tags */}
        <div className="grid gap-2">
          <Label>Tags</Label>
          <div className="flex gap-2">
            <Input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleTagAdd()}
            />
            <Button type="button" onClick={handleTagAdd}>
              Add Tag
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {(form.tags || []).map((tag, idx) => (
              <span key={idx} className="px-3 py-1 text-sm bg-muted rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Markdown Content */}
        <div className="grid gap-2">
          <Label>Blog Content (Markdown)</Label>
          <Textarea
            rows={16}
            className="font-mono text-sm"
            value={form.content as string}
            onChange={(e) => handleChange('content', e.target.value)}
          />
          <Input type="file" accept=".md,text/markdown" onChange={handleFileUpload} />

        </div>

        {/* Submit Button */}
        <Button className="mt-2 w-full" size="lg" variant="default" onClick={handleSubmit}>
          Post Blog
        </Button>

        {/* Upload status */}
        {uploadStatus.message && (
            <p className={`mt-2 text-sm ${ uploadStatus.type === 'error' ? 'text-destructive' : 'text-green-500'}`}>
              {uploadStatus.message}
            </p>
          )}
      </div>
    </div>
  );
}