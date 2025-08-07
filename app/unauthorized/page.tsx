'use client';

import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


export default function BlogDetailPage() {


  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-24">
      <div className="container mx-auto px-4 py-8 min-h-[75vh] flex flex-col items-center justify-center">
        <div className="text-center">

          <h2 className="text-xl font-semibold flex items-center justify-center gap-2 text-destructive mb-4">
            Unauthorized Access
            <AlertTriangle className="h-6 w-6" />
          </h2>
          <p className="text-md text-foreground mb-6">
            Sorry, this page requires administrator privileges to access.
          </p>
          <Button asChild variant="outline">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
