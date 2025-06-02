'use client'

import { motion } from 'motion/react'
import data from '@/data/content.json'

export default function Intro() {
  return (
    <div id="intro" className="flex flex-col md:flex-row md:flex-row-reverse items-center justify-center gap-2 w-full max-w-xl h-full max-h-screen mx-auto px-6 py-0 md:py-18">
      {data.intro.description.map((intro, index) => (
        <motion.p
          key={index}
          className="text-sm md:text-lg text-justify md:[writing-mode:vertical-rl]"
          initial={{ opacity: 0, y: 50, filter: "blur(2px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {intro}
        </motion.p>
      ))}
    </div>
  );
}
