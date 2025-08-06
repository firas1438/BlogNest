'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { BlogDocument } from '@/models/blog'

export default function DashboardPage() {
  const router = useRouter()

  const [form, setForm] = useState<Partial<BlogDocument>>({
    title: '',
    description: '',
    imageSrc: '',
    authorName: '',
    readTime: '',
    tags: [],
    content: '',
  })

  const [tagInput, setTagInput] = useState('')

  const handleChange = (field: keyof BlogDocument, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleTagAdd = () => {
    if (!tagInput.trim()) return
    setForm((prev) => ({
      ...prev,
      tags: [...(prev.tags || []), tagInput.trim()],
    }))
    setTagInput('')
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || file.type !== 'text/markdown') return

    const text = await file.text()
    setForm((prev) => ({ ...prev, content: text }))
  }

  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        router.refresh()
        router.push('/blogs')
      } else {
        console.error('Failed to post blog')
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-24 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Create a New Blog</h1>

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
              <span
                key={idx}
                className="px-3 py-1 text-sm bg-muted rounded-full"
              >
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
          <Input type="file" accept=".md" onChange={handleFileUpload} />
        </div>

        {/* Submit Button */}
        <Button className="mt-6 w-fit" onClick={handleSubmit}>
          Post Blog
        </Button>
      </div>
    </div>
  )
}