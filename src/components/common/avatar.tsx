'use client'

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function Avatar({ text, className }: { text?: string, className?: string }) {
  return (
    <div className={cn("flex justify-center gap-4", className)}>
      <div className="w-full h-18 px-8 flex items-center justify-center bg-neutral-50 border rounded-full origin-right">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 0.3, delay: 0.25 }}
          className="text-lg text-justify leading-none font-maru font-[500] text-neutral-950">{text}</motion.h2>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.3 }}
        className="flex-none size-18 border rounded-full flex justify-center items-center overflow-hidden"
      >
        <Image src="images/avatar.svg" alt="avatar" width={160} height={160} />
      </motion.div>
    </div>
  );
}

