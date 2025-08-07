'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { BarChart2, Users, FileText, Clock } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-18 min-h-screen flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Welcome back to your Dashboard!</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Total Blogs</CardTitle>
            <FileText className="text-muted-foreground" />
          </CardHeader>
          <CardContent className="text-2xl font-semibold">48</CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Total Views</CardTitle>
            <BarChart2 className="text-muted-foreground" />
          </CardHeader>
          <CardContent className="text-2xl font-semibold">12,340</CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Subscribers</CardTitle>
            <Users className="text-muted-foreground" />
          </CardHeader>
          <CardContent className="text-2xl font-semibold">1,024</CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Avg. Read Time</CardTitle>
            <Clock className="text-muted-foreground" />
          </CardHeader>
          <CardContent className="text-2xl font-semibold">4m 32s</CardContent>
        </Card>
      </div>

      {/* Recent Blog Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Blogs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                title: 'Mastering CI/CD Pipelines',
                views: 1200,
                readTime: '5 min',
              },
              {
                title: 'Building a Markdown Blog with Next.js',
                views: 980,
                readTime: '6 min',
              },
              {
                title: '10 Tips for Clean Code in TypeScript',
                views: 720,
                readTime: '4 min',
              },
            ].map((post, i) => (
              <div key={i} className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-base">{post.title}</p>
                  <p className="text-muted-foreground text-sm">
                    {post.readTime} • {post.views.toLocaleString()} views
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Engagement */}
        <Card>
          <CardHeader>
            <CardTitle>Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-2">This Month</p>
            <Progress value={76} className="h-3" />
            <p className="text-muted-foreground text-sm mt-2">76% of traffic goal reached</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}