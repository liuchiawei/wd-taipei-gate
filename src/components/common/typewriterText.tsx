import * as motion from "motion/react-client";
import { Variants } from "motion/react";
import { cn } from "@/lib/utils";

export default function TypewriterText({
  speed = 0.06,
  delay = 0.02,
  text,
  className,
}: {
  speed?: number;
  delay?: number;
  text: string;
  className?: string;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => {
      const delayDuration = i * delay; // 遅延時間の設定
      return {
        opacity: 1,
        y: 0,
        transition: { delay: delayDuration, type: "spring", duration: speed, bounce: 0.4 },
      };
    },
  };
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      className={cn(className)}
    >
      {text.split("").map((letter, index) => (
        <motion.span key={index} variants={variants} custom={index}>
          {letter}
        </motion.span>
      ))}
    </motion.p>
  );
}

