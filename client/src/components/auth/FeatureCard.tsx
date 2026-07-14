"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { FeatureCardData } from "../../types/auth";

interface FeatureCardProps {
  card: FeatureCardData;
  index: number;
}

export default function FeatureCard({ card, index }: FeatureCardProps) {
  // Dynamically resolve icon from Lucide React
  const IconComponent = (Icons as any)[card.iconName] || Icons.CheckCircle2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.2 + index * 0.1,
        ease: [0.16, 1, 0.3, 1], // premium cubic-bezier easeOut
      }}
      whileHover={{
        y: -4,
        scale: 1.02,
        borderColor: "rgba(124, 58, 237, 0.3)", // Purple tint on hover
        boxShadow: "0 10px 30px -10px rgba(124, 58, 237, 0.2), 0 0 15px 1px rgba(124, 58, 237, 0.1)",
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-slate-900/40 p-5 backdrop-blur-md transition-all duration-300"
    >
      {/* Background glow accent on hover */}
      <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Card header / icon */}
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-purple-400 group-hover:from-purple-500/20 group-hover:to-blue-500/20 group-hover:text-purple-300 transition-all duration-300">
        <IconComponent className="h-5 w-5" strokeWidth={1.8} />
      </div>

      {/* Content */}
      <h3 className="mb-1 text-sm font-semibold tracking-tight text-white group-hover:text-purple-200 transition-colors">
        {card.title}
      </h3>
      <p className="text-xs font-normal leading-relaxed text-[#94A3B8]">
        {card.description}
      </p>
    </motion.div>
  );
}
