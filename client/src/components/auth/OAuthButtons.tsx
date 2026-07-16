"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface OAuthButtonsProps {
  onSelect: (provider: string) => void;
}

export default function OAuthButtons({ onSelect }: OAuthButtonsProps) {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  const providers = [
    {
      name: "Google",
      icon: (
        <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      ),
    },
    {
      name: "GitHub",
      icon: (
        <svg className="h-4 w-4 shrink-0 fill-current text-white" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
      ),
    },
    {
      name: "Microsoft",
      icon: (
        <svg className="h-4 w-4 shrink-0" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h11v11H0z" fill="#f25022"/>
          <path d="M12 0h11v11H12z" fill="#7fba00"/>
          <path d="M0 12h11v11H0z" fill="#00a4ef"/>
          <path d="M12 12h11v11H12z" fill="#ffb900"/>
        </svg>
      ),
    },
  ];

  const handleOAuthClick = (name: string) => {
    setLoadingProvider(name);
    onSelect(name);
    setTimeout(() => {
      setLoadingProvider(null);
    }, 2000);
  };

  return (
    <div className="grid grid-cols-3 gap-3 w-full">
      {providers.map((p) => {
        const isCurrentLoading = loadingProvider === p.name;
        return (
          <motion.button
            key={p.name}
            type="button"
            disabled={loadingProvider !== null}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ y: 0, scale: 0.98 }}
            onClick={() => handleOAuthClick(p.name)}
            className="relative flex h-11 items-center justify-center gap-2.5 rounded-xl border border-white/[0.06] bg-slate-900/60 text-xs font-semibold text-white/80 transition-all duration-200 hover:border-white/[0.15] hover:bg-slate-800/80 hover:text-white disabled:pointer-events-none disabled:opacity-50"
            style={{
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
            }}
          >
            {isCurrentLoading ? (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
            ) : (
              p.icon
            )}
            <span className="hidden sm:inline">{p.name}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
