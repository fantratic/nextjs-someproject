import Land from '@/src/components/land'
import Image from 'next/image'
import Navbar from "@/src/components/navbar";

export default function Home() {
  return (
      <>
          <Navbar />
        <main className="flex min-h-screen flex-col p-24 w-full">

          <Land
          fixed="Hello! I am, "
          />
        </main>
    </>
  )
}

