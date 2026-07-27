import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GYU Studio | Live your flow, Move lightly.",
  description: "Brand introduction, demand survey, and business operations hub.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
