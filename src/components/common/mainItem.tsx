'use client'

import Image from "next/image"
import { motion } from 'motion/react'
import { Gate } from "@/lib/types/type"
import Avatar from "@/components/common/avatar"
import SplitText from "@/components/common/splitText"

export default function MainItem({ data }: { data: Gate }) {

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.6, duration: i * 0.1 + 0.2 } }),
  }

  return (
    <div 
      id={data.id} 
      className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full h-full p-8 mx-auto scroll-mt-24"
    >
      {/* 画像 */}
      <div className="row-span-3 flex flex-col items-center justify-center relative w-full h-full p-12 bg-neutral-200 dark:bg-neutral-700 rounded-xl">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 120, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", bounce: 0.6, stiffness: 200, duration: 0.2, delay: 0.2 }}
        >
          <Image src={data.image} alt={data.name} width={300} height={300} />
        </motion.div>
        <motion.div
          className="border-b border-2 border-stone-700 dark:border-neutral-900 z-10 origin-bottom-left"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ type: "spring", duration: 0.3 }}
        />
        {/* 画像タイトル */}
        <SplitText
          text={data.name}
          className="text-5xl font-title my-4 tracking-widest"
        />
      </div>
      {/* タイトル */}
      <div className="hidden md:block md:[writing-mode:vertical-rl] relative h-fit">
        <SplitText
          text={data.formalName}
          className="text-5xl font-[500] tracking-widest"
        />
        <motion.h2
          className="text-lg font-[300] tracking-widest relative h-max top-1/2 -translate-y-1/2"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          custom={2}
        >
          {data.hiragana}
        </motion.h2>
      </div>
      {/* 特徴 */}
      <Avatar text={data.feature} className="justify-end md:justify-start" />
      {/* 説明 */}
      <div className="flex flex-col gap-4">
        {data.descriptions.map((description, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="text-sm text-justify"
          >{description}</motion.p>
        ))}
      </div>
    </div>
  );
}