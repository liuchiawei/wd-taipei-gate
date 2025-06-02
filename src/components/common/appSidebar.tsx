"use client";

import { Sidebar, SidebarTrigger, SidebarHeader } from "@/components/ui/sidebar";
import Link from "next/link";
import data from "@/data/content.json";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useMemo } from "react";
import SidebarBtn from "./sidebarBtn";

export default function AppSidebar() {
  // ゲートのIDリストを取得
  const sectionIds = useMemo(() => data.sidebar.map(option => option.id), []);
  
  // 現在のアクティブセクションを監視
  const activeSection = useActiveSection(sectionIds);

  // スクロール関数 - 指定された要素にスムーズにスクロールする
  const scrollToGate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <Sidebar className="z-50">
      <SidebarHeader className="w-full h-full items-center justify-center p-4">
        <SidebarTrigger className="fixed top-2 left-2" />
        <Link href='/' className="text-5xl font-title tracking-tighter [writing-mode:vertical-rl] whitespace-wrap select-none">{data.title}</Link>
      </SidebarHeader>
      <div className="flex flex-col w-full px-4">
        {data.sidebar.map((option) => (
          <SidebarBtn
            key={option.id}
            scrollToGate={scrollToGate}
            activeSection={activeSection}
            id={option.id}
            name={option.name}
          />
        ))}
      </div>
    </Sidebar>
  );
}
