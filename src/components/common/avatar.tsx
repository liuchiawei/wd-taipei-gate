'use client'

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function Avatar({ text, className }: { text?: string, className?: string }) {
  return (
    <div className={cn("flex justify-center gap-4", className)}>
      <motion.div
        initial={{ opacity: 0, x: 150, scale: 0 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ type: "spring", duration: 0.3 }}
        className="px-8 h-18 flex items-center justify-center bg-neutral-50 border rounded-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: 0.2 }}
          className="text-lg text-center font-maru font-[500] text-neutral-950">{text}</motion.h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.3 }}
        className="size-18 border rounded-full overflow-hidden"
      >
        <Image src="images/avatar.svg" alt="avatar" width={100} height={100} />
      </motion.div>
    </div>
  );
}

