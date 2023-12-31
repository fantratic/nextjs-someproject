import Land from '@/src/components/land'
import Image from 'next/image'
import React from 'react'
import Test from '@/src/compotent/test';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 w-full">
      <Land 
      fixed="Hello! I am, "
      />
    </main>
  )
}
