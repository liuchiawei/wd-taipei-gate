"use client";

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScrollDown() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollDown = () => {
    if (window.visualViewport) {  
      window.scrollTo({ top: window.visualViewport?.height + scrollTop, behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight + scrollTop, behavior: "smooth" });
    }
  };
  return (
    <Button onClick={scrollDown} variant="default" size="lg" className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer hover:shadow-lg hover:shadow-neutral-900 hover:-translate-y-2">
      <ArrowDown className="size-4" />
    </Button>
  );
}
