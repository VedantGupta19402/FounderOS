"use client";

import { motion } from "framer-motion";

// Static positions to avoid Math.random() hydration mismatches and eliminate hooks
const STATIC_PARTICLES = [
  { size: 3, left: "12%", top: "85%", duration: 22, x: 20 },
  { size: 4, left: "45%", top: "15%", duration: 28, x: -20 },
  { size: 2, left: "78%", top: "55%", duration: 25, x: 15 },
  { size: 5, left: "23%", top: "40%", duration: 32, x: -10 },
  { size: 3, left: "67%", top: "72%", duration: 19, x: 30 },
  { size: 2, left: "89%", top: "25%", duration: 24, x: -15 },
  { size: 4, left: "5%", top: "60%", duration: 27, x: 10 },
  { size: 3, left: "55%", top: "90%", duration: 31, x: -25 },
  { size: 2, left: "34%", top: "5%", duration: 20, x: 5 },
  { size: 5, left: "92%", top: "80%", duration: 29, x: 20 },
  { size: 3, left: "18%", top: "20%", duration: 26, x: -10 },
  { size: 4, left: "62%", top: "48%", duration: 23, x: 15 },
  { size: 2, left: "41%", top: "68%", duration: 30, x: -30 },
  { size: 5, left: "83%", top: "10%", duration: 25, x: 10 },
  { size: 3, left: "73%", top: "93%", duration: 21, x: -15 },
];

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 -z-30 overflow-hidden bg-[#070B14]">
      {/* Radial ambient glow 1 */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[120px]"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Radial ambient glow 2 */}
      <motion.div
        className="absolute -bottom-[20%] -right-[10%] h-[700px] w-[700px] rounded-full bg-blue-600/10 blur-[150px]"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -40, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Radial ambient glow 3 (center accent) */}
      <motion.div
        className="absolute top-[30%] left-[30%] h-[500px] w-[500px] rounded-full bg-violet-600/5 blur-[100px]"
        animate={{
          scale: [1, 1.2, 0.8, 1],
          opacity: [0.3, 0.6, 0.3, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating interactive particles */}
      <div className="absolute inset-0 opacity-40">
        {STATIC_PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, p.x, 0],
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
