"use client";

import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // Intersection Observer を使用して、現在のビューポートにある要素を検出
    const observer = new IntersectionObserver(
      (entries) => {
        // 表示されている要素の中で最も上にある要素を見つける
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px", // ビューポートの上部20%から70%の範囲で検出
        threshold: 0.1, // 要素の10%が見えたらトリガー
      }
    );

    // 各セクションを監視対象に追加
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}
