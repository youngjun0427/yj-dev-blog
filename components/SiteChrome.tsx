"use client"

import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  if (pathname === "/") return <>{children}</>

  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto max-w-4xl px-4 py-8">{children}</main>
      <Footer />
    </>
  )
}
