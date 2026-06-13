import type { Metadata } from "next";
import { Geist, Geist_Mono, Gowun_Batang } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gowunBatang = Gowun_Batang({
  variable: "--font-gowun-batang",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "피아노숲 음악교습소 | 영주 감성 피아노 레슨",
  description: "일상 속 작은 숲, 피아노숲 음악교습소입니다. 유아부터 성인까지, 음악의 즐거움을 싹틔우는 1:1 맞춤형 피아노 레슨을 경험하세요.",
  keywords: ["피아노숲", "피아노숲교습소", "영주피아노학원", "영주피아노교습소", "성인피아노", "취미피아노", "피아노레슨", "영주시피아노"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} ${gowunBatang.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}


