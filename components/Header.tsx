import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-blue-600 transition-colors">
            YJ Dev Blog
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
