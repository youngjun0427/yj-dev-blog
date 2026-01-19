export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 mt-12">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {currentYear} YJ Dev Blog. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/youngjun0427"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
