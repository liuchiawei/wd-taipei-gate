"use client";

import { motion } from 'motion/react';
import data from "@/data/content.json";
import ScrollDown from "@/components/common/scrollDown";
import Avatar from "@/components/common/avatar";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center px-12 relative">
      <h1 className="text-5xl md:text-[96px] font-title mb-12">{data.header.title}</h1>
      <Avatar text={data.header.subtitle} />
      <p className="w-full mt-6 max-w-lg text-sm text-justify font-maru">{data.header.description}</p>
      <motion.div
        className="w-full absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 origin-bottom"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.5, duration: 0.5, delay: 0.6 }}
      >
        <Image src="/images/tpe_skyline-02.svg" alt="header" width={1200} height={600} />
      </motion.div>
      <motion.div
        className="w-full absolute bottom-0 left-1/2 -translate-x-1/2 origin-bottom"
        initial={{ opacity: 0, y: 100, scale: 0.7 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", bounce: 0.5, duration: 0.6, delay: 0.3 }}
      >
        <Image src="/images/tpe_skyline-01.svg" alt="header" width={1200} height={600} />
      </motion.div>
      <ScrollDown />
    </div>
  );
}