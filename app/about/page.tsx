export default function About() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1>About</h1>
      <p>
        안녕하세요! 이곳은 개발 관련 지식과 경험을 공유하는 기술 블로그입니다.
      </p>
      <h2>주요 주제</h2>
      <ul>
        <li>웹 개발 (React, Next.js, TypeScript)</li>
        <li>백엔드 개발</li>
        <li>알고리즘 & 자료구조</li>
        <li>개발 경험 공유</li>
      </ul>
      <h2>Contact</h2>
      <p>
        GitHub:{' '}
        <a
          href="https://github.com/youngjun0427"
          target="_blank"
          rel="noopener noreferrer"
        >
          @youngjun0427
        </a>
      </p>
    </div>
  )
}
