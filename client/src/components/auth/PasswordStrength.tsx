"use client";

import { motion } from "framer-motion";

interface PasswordStrengthProps {
  passwordVal: string;
}

export default function PasswordStrength({ passwordVal }: PasswordStrengthProps) {
  if (!passwordVal) return null;

  let score = 0;
  
  // Rule 1: Length >= 8
  if (passwordVal.length >= 8) score += 1;
  // Rule 2: Contains numbers
  if (/[0-9]/.test(passwordVal)) score += 1;
  // Rule 3: Contains uppercase & lowercase
  if (/[A-Z]/.test(passwordVal) && /[a-z]/.test(passwordVal)) score += 1;
  // Rule 4: Contains special characters
  if (/[^A-Za-z0-9]/.test(passwordVal)) score += 1;

  let label: "Weak" | "Fair" | "Good" | "Strong" = "Weak";
  let color = "bg-red-500";
  let textColor = "text-red-400";

  if (score <= 1) {
    label = "Weak";
    color = "bg-red-500";
    textColor = "text-red-400";
  } else if (score === 2) {
    label = "Fair";
    color = "bg-amber-500";
    textColor = "text-amber-400";
  } else if (score === 3) {
    label = "Good";
    color = "bg-blue-500";
    textColor = "text-blue-400";
  } else {
    label = "Strong";
    color = "bg-emerald-500";
    textColor = "text-emerald-400";
  }

  return (
    <div className="mt-2.5 w-full space-y-1.5">
      {/* Label and description */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-wider">
          Password Strength
        </span>
        <motion.span
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className={`text-[10px] font-bold uppercase tracking-wider ${textColor}`}
        >
          {label}
        </motion.span>
      </div>

      {/* Progress Bars */}
      <div className="flex h-1.5 gap-1.5 w-full">
        {[1, 2, 3, 4].map((step) => {
          const isFilled = score >= step;
          let stepColor = "bg-white/10";
          if (isFilled) {
            stepColor = color;
          }

          return (
            <div
              key={step}
              className="relative h-full flex-1 overflow-hidden rounded-full bg-white/[0.06]"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: isFilled ? "100%" : "0%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`h-full ${stepColor}`}
              />
            </div>
          );
        })}
      </div>
      
      {/* Dynamic Requirements Helper */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-1 pt-1">
        <div className={`text-[9px] font-medium transition-colors ${passwordVal.length >= 8 ? "text-emerald-400/80" : "text-white/30"}`}>
          ✓ At least 8 characters
        </div>
        <div className={`text-[9px] font-medium transition-colors ${/[0-9]/.test(passwordVal) ? "text-emerald-400/80" : "text-white/30"}`}>
          ✓ At least one number
        </div>
        <div className={`text-[9px] font-medium transition-colors ${/[A-Z]/.test(passwordVal) && /[a-z]/.test(passwordVal) ? "text-emerald-400/80" : "text-white/30"}`}>
          ✓ Upper & lowercase letters
        </div>
        <div className={`text-[9px] font-medium transition-colors ${/[^A-Za-z0-9]/.test(passwordVal) ? "text-emerald-400/80" : "text-white/30"}`}>
          ✓ Special character
        </div>
      </div>
    </div>
  );
}
