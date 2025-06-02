"use client";

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger, SidebarHeader } from "@/components/ui/sidebar";
import data from "@/data/content.json";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useMemo } from "react";

export default function AppSidebar() {
  // ゲートのIDリストを取得
  const sectionIds = useMemo(() => data.gates.map(gate => gate.id), []);
  
  // 現在のアクティブセクションを監視
  const activeSection = useActiveSection(sectionIds);

  // スクロール関数 - 指定された要素にスムーズにスクロールする
  const scrollToGate = (gateId: string) => {
    const element = document.getElementById(gateId);
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
      <SidebarHeader className="items-center justify-center p-4">
        <SidebarTrigger className="fixed top-2 left-2" />
        <h1 className="text-5xl text-center font-title tracking-tighter [writing-mode:vertical-rl] select-none">{data.title}</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.gates.map((gate) => (
                <SidebarMenuItem key={gate.id}>
                  <SidebarMenuButton
                    size="lg"
                    onClick={() => scrollToGate(gate.id)}
                    className={`transition-all duration-300 ${
                      activeSection === gate.id 
                        ? 'bg-primary text-primary-foreground shadow-md' 
                        : 'hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    <h1 className={`transition-all duration-300 ${
                      activeSection === gate.id ? 'translate-x-4' : 'font-normal'
                    }`}>
                      {gate.name}
                    </h1>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
