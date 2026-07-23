"use client";

import { motion } from "framer-motion";

export default function AnimatedGrid() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden opacity-30">
      {/* CSS-based Grid Background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" 
        style={{
          maskImage: "radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)",
          WebkitMaskImage: "radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)",
        }}
      />

      {/* SVG Animated Laser Lines */}
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="grid-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0" />
            <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizontal Laser Line */}
        <motion.line
          x1="0%"
          y1="20%"
          x2="100%"
          y2="20%"
          stroke="url(#grid-glow)"
          strokeWidth="2"
          animate={{
            y1: ["0%", "100%", "0%"],
            y2: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Vertical Laser Line */}
        <motion.line
          x1="30%"
          y1="0%"
          x2="30%"
          y2="100%"
          stroke="url(#grid-glow)"
          strokeWidth="2"
          animate={{
            x1: ["0%", "100%", "0%"],
            x2: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}
