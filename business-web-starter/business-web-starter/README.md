# Business Web Starter

Vercel 배포용 Next.js 사업 운영 웹사이트 스타터입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

## Vercel 배포

1. 이 폴더를 GitHub 저장소에 업로드합니다.
2. Vercel에서 **Add New → Project**를 선택합니다.
3. GitHub 저장소를 Import합니다.
4. Framework Preset이 Next.js인지 확인하고 Deploy합니다.

## 가장 먼저 수정할 곳

- `app/page.tsx`: 브랜드명, 문구, Instagram/WhatsApp 링크, 설문 URL
- `app/layout.tsx`: 사이트 제목과 설명
- `app/globals.css`: 브랜드 색상
- `public/`: 로고와 제품 이미지

## 현재 포함 기능

- 반응형 브랜드 랜딩 페이지
- 설문 참여 CTA
- 운영 대시보드 목업
- 상태 확인 API `/api/health`
