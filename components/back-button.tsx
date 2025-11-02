'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Undo } from 'lucide-react'

export function BackButton() {
  const router = useRouter()

  return (
    <Button variant="ghost" onClick={() => router.back()} className="mb-4 rounded-lg cursor-pointer">
      <Undo /> Return
    </Button>
  )
}
