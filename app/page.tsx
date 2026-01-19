import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">YJ Dev Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          개발 관련 지식과 경험을 공유합니다
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">최근 포스트</h2>
        <div className="grid gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-2xl font-semibold mb-2 hover:text-blue-600">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {post.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <time dateTime={post.date}>{post.date}</time>
                {post.tags && (
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
