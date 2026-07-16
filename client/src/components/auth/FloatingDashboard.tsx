"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  ArrowUpRight, Check, Search, Bell, Plus,
  ChevronDown, MessageSquare
} from "lucide-react";

export default function FloatingDashboard() {
  return (
    <div className="w-full relative py-6 select-none" style={{ perspective: "1500px" }}>
      {/* 3D Tilted Wrapper */}
      <motion.div
        initial={{ opacity: 0, rotateY: 0, rotateX: 0 }}
        animate={{ 
          opacity: 1, 
          rotateY: -13, 
          rotateX: 6, 
          rotateZ: -2,
          y: [0, -6, 0]
        }}
        transition={{
          opacity: { duration: 0.8 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          default: { duration: 0.8, ease: "easeOut" }
        }}
        className="w-full max-w-[560px] mx-auto rounded-[16px] border border-white/[0.08] bg-[#0E1321] text-white shadow-2xl overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
          boxShadow: "0 30px 60px -15px rgba(0,0,0,0.8), 0 0 50px 0 rgba(124,58,237,0.08)",
        }}
      >
        {/* Top Navbar */}
        <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-2.5 bg-[#0A0D18]/90">
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 text-[10px] font-bold">
              F
            </div>
            <span className="text-[11px] font-semibold text-white/90">FounderOS</span>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center bg-white/[0.03] border border-white/[0.05] rounded-md px-2 py-1 text-[9px] text-white/40 w-36">
              <Search className="h-2.5 w-2.5 mr-1 text-white/30" />
              <span>Search anything...</span>
            </div>
            <Bell className="h-3 w-3 text-white/50 cursor-pointer" />
            <Image 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" 
              alt="Avatar" 
              width={18}
              height={18}
              unoptimized
              className="h-4.5 w-4.5 rounded-full object-cover border border-white/20"
            />
          </div>
        </div>

        {/* Core Layout Split */}
        <div className="flex min-h-[300px]">
          
          {/* Left Sidebar */}
          <div className="w-[110px] shrink-0 border-r border-white/[0.04] bg-[#0A0D18]/50 p-2.5 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-md bg-white/[0.04] px-2 py-1 text-[9px] font-medium text-white/90">
                <span>Dashboard</span>
                <ChevronDown className="h-2 w-2 text-white/40" />
              </div>
              <div className="space-y-1.5 pl-1.5">
                {["Projects", "Tasks", "Docs", "Roadmap", "CRM", "Meetings", "Analytics", "Finance", "Settings"].map((item) => (
                  <div key={item} className="text-[9px] font-medium text-white/40 hover:text-white/80 cursor-pointer">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Profile widget */}
            <div className="flex items-center gap-1.5 border-t border-white/[0.04] pt-2">
              <div className="h-4.5 w-4.5 rounded-full bg-purple-500/20 flex items-center justify-center text-[7px] text-purple-300 font-bold border border-purple-500/30">
                VG
              </div>
              <div className="overflow-hidden">
                <p className="text-[7.5px] font-bold text-white/80 leading-none truncate">Vedant Gupta</p>
                <p className="text-[6.5px] font-medium text-white/30 leading-none mt-0.5">Founder</p>
              </div>
            </div>
          </div>

          {/* Right Main Panel */}
          <div className="flex-1 p-4 bg-[#0E1321] overflow-y-auto">
            {/* Header Title */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xs font-bold text-white flex items-center gap-1">
                  Good morning, Vedant 👋
                </h3>
                <p className="text-[9px] text-white/40 mt-0.5">
                  Here's what's happening with <span className="text-blue-400 font-semibold">Acme Inc.</span> today.
                </p>
              </div>
              <button className="flex items-center gap-1 rounded bg-[#2563EB] hover:bg-blue-600 px-2 py-1 text-[9px] font-semibold transition-colors">
                <Plus className="h-2.5 w-2.5" />
                New
              </button>
            </div>

            {/* KPI Stats Grid */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              
              {/* Stat 1: MRR */}
              <div className="bg-[#12182B] border border-white/[0.03] rounded-lg p-2 flex flex-col justify-between">
                <div>
                  <span className="text-[7.5px] font-medium text-white/40 uppercase">MRR</span>
                  <p className="text-[10px] font-bold mt-0.5">$24,540</p>
                </div>
                <div className="flex items-center justify-between text-[7px] text-emerald-450 mt-1">
                  <span className="font-semibold text-emerald-450">↗ 18.6%</span>
                </div>
                {/* SVG sparkline */}
                <div className="h-4 w-full mt-1.5 opacity-80">
                  <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 18 Q 15 10, 30 14 T 60 8 T 90 12 T 100 4" fill="none" stroke="#22C55E" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

              {/* Stat 2: Active Users */}
              <div className="bg-[#12182B] border border-white/[0.03] rounded-lg p-2 flex flex-col justify-between">
                <div>
                  <span className="text-[7.5px] font-medium text-white/40 uppercase">Active Users</span>
                  <p className="text-[10px] font-bold mt-0.5">2,856</p>
                </div>
                <div className="flex items-center justify-between text-[7px] text-emerald-450 mt-1">
                  <span className="font-semibold text-purple-400">↗ 8.2%</span>
                </div>
                {/* SVG sparkline */}
                <div className="h-4 w-full mt-1.5 opacity-80">
                  <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 16 Q 20 18, 40 10 T 70 12 T 100 6" fill="none" stroke="#A259FF" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

              {/* Stat 3: Tasks Done */}
              <div className="bg-[#12182B] border border-white/[0.03] rounded-lg p-2 flex flex-col justify-between">
                <div>
                  <span className="text-[7.5px] font-medium text-white/40 uppercase">Tasks Done</span>
                  <p className="text-[10px] font-bold mt-0.5">156/240</p>
                </div>
                <div className="flex items-center justify-between text-[7px] text-emerald-450 mt-1">
                  <span className="font-semibold text-amber-500">↗ 23.1%</span>
                </div>
                {/* SVG sparkline */}
                <div className="h-4 w-full mt-1.5 opacity-80">
                  <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 15 Q 30 18, 50 12 T 80 15 T 100 8" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

              {/* Stat 4: Runway */}
              <div className="bg-[#12182B] border border-white/[0.03] rounded-lg p-2 flex flex-col justify-between">
                <div>
                  <span className="text-[7.5px] font-medium text-white/40 uppercase">Runway</span>
                  <p className="text-[10px] font-bold mt-0.5">11.2m</p>
                </div>
                <div className="flex items-center justify-between text-[7px] text-emerald-450 mt-1">
                  <span className="font-semibold text-cyan-400">↗ 2.1m</span>
                </div>
                {/* SVG sparkline */}
                <div className="h-4 w-full mt-1.5 opacity-80">
                  <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 16 Q 25 18, 50 10 T 75 14 T 100 6" fill="none" stroke="#06B6D4" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

            </div>

            {/* Core Widgets Split */}
            <div className="grid grid-cols-12 gap-3">
              
              {/* Project Overview */}
              <div className="col-span-5 bg-[#12182B] border border-white/[0.03] rounded-lg p-3">
                <span className="text-[8px] font-semibold text-white/40 uppercase block mb-2.5 border-b border-white/[0.03] pb-1.5">Project Overview</span>
                <div className="space-y-2">
                  {[
                    { name: "FounderOS Web", prc: 62, color: "bg-[#2563EB]" },
                    { name: "Mobile App", prc: 48, color: "bg-[#A259FF]" },
                    { name: "Chrome Extension", prc: 31, color: "bg-[#F59E0B]" },
                    { name: "Design System", prc: 82, color: "bg-[#22C55E]" },
                  ].map((proj) => (
                    <div key={proj.name} className="space-y-1">
                      <div className="flex items-center justify-between text-[7.5px] font-semibold">
                        <span className="text-white/70">{proj.name}</span>
                        <span>{proj.prc}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                        <div className={`h-full ${proj.color}`} style={{ width: `${proj.prc}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Meetings */}
              <div className="col-span-4 bg-[#12182B] border border-white/[0.03] rounded-lg p-3">
                <span className="text-[8px] font-semibold text-white/40 uppercase block mb-2.5 border-b border-white/[0.03] pb-1.5">Upcoming Meetings</span>
                <div className="space-y-2">
                  {[
                    { title: "Investor Call", time: "Today, 2:00 PM" },
                    { title: "Sprint Planning", time: "Tomorrow, 11:00 AM" },
                    { title: "Product Review", time: "May 24, 10:30 AM" },
                  ].map((meet, idx) => (
                    <div key={idx} className="flex items-start gap-2 border-b border-white/[0.02] pb-1.5 last:border-0 last:pb-0">
                      <div className="h-5 w-5 shrink-0 rounded bg-white/[0.04] flex items-center justify-center text-[7px] font-bold text-white/60">
                        {meet.title[0]}
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-[8px] font-bold text-white/80 leading-tight truncate">{meet.title}</p>
                        <p className="text-[7px] text-white/35 mt-0.5 leading-none">{meet.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="col-span-3 bg-[#12182B] border border-white/[0.03] rounded-lg p-3">
                <span className="text-[8px] font-semibold text-white/40 uppercase block mb-2.5 border-b border-white/[0.03] pb-1.5">Recent Activity</span>
                <div className="space-y-2">
                  {[
                    { text: "PR #122 merged", t: "2m ago" },
                    { text: "New feedback received", t: "15m ago" },
                    { text: "Deployment successful", t: "1h ago" },
                    { text: "Payment received", t: "3h ago" },
                  ].map((act, idx) => (
                    <div key={idx} className="flex flex-col border-b border-white/[0.02] pb-1 last:border-0 last:pb-0">
                      <span className="text-[7.5px] font-semibold text-white/80 leading-tight truncate">{act.text}</span>
                      <span className="text-[6.5px] text-white/30 mt-0.5">{act.t}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </motion.div>
    </div>
  );
}
