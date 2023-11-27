import Land from '@/src/components/land'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 w-full">
      <Land 
      fixed="Hello! I am, "
      />
    </main>
  )
}
