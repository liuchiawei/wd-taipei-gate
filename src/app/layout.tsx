import type { Metadata } from "next";
import { Kiwi_Maru, Dela_Gothic_One } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/common/themeProvider";
import AppSidebar from "@/components/common/appSidebar";

const kiwiMaru = Kiwi_Maru({
  variable: "--font-kiwi-maru",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const delaGothicOne = Dela_Gothic_One({
  variable: "--font-dela-gothic-one",
  subsets: ["latin"],
  weight: ["400"],
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
      <body className={`${kiwiMaru.variable} ${delaGothicOne.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full max-w-6xl mx-auto">
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
