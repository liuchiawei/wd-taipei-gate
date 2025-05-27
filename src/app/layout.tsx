import type { Metadata } from "next";
import { Roboto, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/common/themeProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "台北の五大城門巡り | 歴史と現代が交差する場所",
  description: "台北城の五つの城門（承恩門、景福門、麗正門、重熙門、寶成門）を詳しく紹介し、その歴史、建築様式、美しさを網羅的に紹介する完全ガイドです。",
  keywords: "台北城, 台北, 北門, 南門, 東門, 西門, 小南門, 承恩門, 景福門, 麗正門, 重熙門, 寶成門, 歴史, 建築, 文化, 旅行, 台湾, Beimen, Ximen, Taipei, Taiwan",
  openGraph: {
    title: "台北の五大城門巡り | 歴史と現代が交差する場所",
    description: "台北城の五つの城門（承恩門、景福門、麗正門、重熙門、寶成門）を詳しく紹介し、その歴史、建築様式、美しさを網羅的に紹介する完全ガイドです。",
    images: "https://gate-to-taipei.com/ogp.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" >
      <body className={`${roboto.variable} ${notoSansJP.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
