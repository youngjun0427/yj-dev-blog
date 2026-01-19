# YJ Dev Blog

Next.js와 MDX를 활용한 기술 블로그입니다.

## 기술 스택

- **Next.js 15** - React 프레임워크 (App Router)
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 스타일링
- **MDX** - Markdown + React 컴포넌트
- **Gray Matter** - Frontmatter 파싱

## 주요 기능

- MDX로 작성된 블로그 포스트
- 태그 시스템
- 반응형 디자인
- 다크모드 지원 (시스템 설정 기반)
- SEO 최적화

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 3. 빌드

```bash
npm run build
npm start
```

## 프로젝트 구조

```
yj-dev-blog/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈페이지 (포스트 목록)
│   ├── globals.css        # 글로벌 스타일
│   ├── about/             # About 페이지
│   └── blog/[slug]/       # 블로그 포스트 상세 페이지
├── components/            # 재사용 가능한 컴포넌트
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/                   # 유틸리티 함수
│   └── posts.ts          # 포스트 데이터 로딩
├── posts/                 # MDX 블로그 포스트
│   ├── welcome.mdx
│   ├── nextjs-intro.mdx
│   └── typescript-tips.mdx
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 새 포스트 작성하기

1. `posts/` 디렉토리에 `.mdx` 파일을 생성합니다
2. Frontmatter를 추가합니다:

```mdx
---
title: '포스트 제목'
date: '2026-01-19'
description: '포스트 설명'
tags: ['Tag1', 'Tag2']
---

# 포스트 내용

여기에 Markdown이나 React 컴포넌트를 작성하세요.
```

3. 파일을 저장하면 자동으로 블로그에 표시됩니다!

## 배포

### Vercel

가장 쉬운 배포 방법은 Vercel을 사용하는 것입니다:

1. GitHub 저장소에 코드 푸시
2. [Vercel](https://vercel.com)에서 프로젝트 Import
3. 자동 배포 완료!

### 기타 플랫폼

- Netlify
- AWS Amplify
- Docker를 사용한 자체 호스팅

## 라이선스

MIT
