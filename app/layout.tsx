import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '항공권 알리미 | 국내선 취소표 알림',
  description: '기다리던 국내선 취소표가 나오면 알려드려요.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
