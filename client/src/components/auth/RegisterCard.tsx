"use client";

import { motion } from "framer-motion";
import OAuthButtons from "./OAuthButtons";
import RegisterForm from "./RegisterForm";
import { RegisterInput } from "../../types/auth";
import { Check } from "lucide-react";
import { useState } from "react";

interface RegisterCardProps {
  onSuccess: (data: RegisterInput) => void;
}

export default function RegisterCard({ onSuccess }: RegisterCardProps) {
  const [successData, setSuccessData] = useState<RegisterInput | null>(null);

  const handleOAuthSelect = (provider: string) => {
    console.log(`OAuth clicked for provider: ${provider}`);
    // Simulate successful mock registration with oauth
    setTimeout(() => {
      onSuccess({
        firstName: "Founder",
        lastName: "User",
        email: `oauth-user@example.com`,
        password: "OauthPassword123!",
        confirmPassword: "OauthPassword123!",
        companyName: `${provider} Inc.`,
        acceptTerms: true,
      });
    }, 1800);
  };

  const handleFormSuccess = (data: RegisterInput) => {
    setSuccessData(data);
    onSuccess(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-lg overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0F172A]/70 p-6 md:p-8 shadow-2xl backdrop-blur-xl"
      style={{
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
      }}
    >
      {/* Upper ambient glow line */}
      <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* Card Header */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          Create your account
        </h2>
        <p className="mt-2 text-sm text-[#94A3B8]">
          Start your 14-day free trial today.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-5">
        {/* OAuth Grids */}
        <OAuthButtons onSelect={handleOAuthSelect} />

        {/* Translucent Divider */}
        <div className="relative flex items-center justify-center py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/[0.06]"></div>
          </div>
          <span className="relative bg-[#0F172A] px-3.5 text-[10px] font-bold tracking-wider text-white/30 uppercase">
            OR CONTINUE WITH EMAIL
          </span>
        </div>

        {/* Registration Form */}
        <RegisterForm onSubmitSuccess={handleFormSuccess} />
      </div>

      {/* Card Footer badges */}
      <div className="mt-6 border-t border-white/[0.06] pt-5 flex items-center justify-center gap-x-4 md:gap-x-6 text-[10px] font-semibold text-white/40 tracking-wider uppercase select-none">
        <div className="flex items-center gap-1">
          <Check className="h-3 w-3 text-purple-400" strokeWidth={3} />
          <span>14-Day Free Trial</span>
        </div>
        <div className="flex items-center gap-1">
          <Check className="h-3 w-3 text-purple-400" strokeWidth={3} />
          <span>No Credit Card</span>
        </div>
        <div className="flex items-center gap-1">
          <Check className="h-3 w-3 text-purple-400" strokeWidth={3} />
          <span>Cancel Anytime</span>
        </div>
      </div>
    </motion.div>
  );
}
