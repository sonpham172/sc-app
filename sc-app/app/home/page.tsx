"use client";

import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-gray-800 font-sans selection:bg-sky-500 selection:text-white pb-8 relative overflow-x-hidden">
      {/* Sidebar Component */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Top Header Bar */}
      <header className="bg-[#0099e6] text-white px-4 py-3 flex items-center justify-between shadow-sm">
        <button
          type="button"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Menu"
          className="p-1 focus:outline-none cursor-pointer"
        >
          <div className="w-6 h-[2px] bg-white mb-1.5"></div>
          <div className="w-6 h-[2px] bg-white mb-1.5"></div>
          <div className="w-6 h-[2px] bg-white"></div>
        </button>
      </header>

      {/* Main Content Area */}
      <main className="p-4 max-w-md mx-auto space-y-4">
        {/* Security / Scam Warning Banner */}
        <div className="bg-[#00b4f0] text-white rounded-lg p-4 shadow-sm text-sm leading-relaxed">
          <h2 className="font-semibold text-base mb-1">
            Be Vigilant and Stay Protected Against Scammers
          </h2>
          <p className="text-xs text-sky-50">
            Please treat calls, emails or text messages claiming to be from the
            Bank, the government or relevant authorities with caution. (click
            here for Security Tips).
          </p>
        </div>

        {/* Greeting */}
        <div className="pt-1">
          <h1 className="text-2xl font-light text-[#00b4f0] tracking-wide">
            Good evening!
          </h1>
        </div>

        {/* ACCOUNTS Card */}


{/* ACCOUNTS Card - Đã thêm Link chuyển tới /accounts/history */}
<Link
  href="/accounts/history"
  className="block bg-white rounded-md p-4 shadow-sm border border-gray-200/80 hover:border-[#00b4f0] transition-colors cursor-pointer group"
>
  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
    <span className="text-sm font-semibold tracking-wider text-gray-700 group-hover:text-[#00b4f0] transition-colors">
      ACCOUNTS
    </span>
    <div className="text-gray-400 group-hover:text-[#00b4f0] transition-colors">
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M18 12h.01" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  </div>
  <div className="pt-3 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <span className="text-xl font-medium text-[#00b4f0]">
        + 381,875,616.00
      </span>
      <span className="bg-[#00b4f0] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
        VND
      </span>
    </div>
    <span className="text-xs text-gray-400 group-hover:translate-x-1 transition-transform">
      ➔
    </span>
  </div>
</Link>
        {/* CREDIT CARDS Card */}
        <div className="bg-white rounded-md p-4 shadow-sm border border-gray-200/80">
          <div className="flex justify-between items-center pb-3 border-b border-gray-100">
            <span className="text-sm font-semibold tracking-wider text-gray-700">
              CREDIT CARDS
            </span>
            <div className="text-gray-400">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            </div>
          </div>
          <div className="pt-3 flex items-center gap-2">
            <span className="text-xl font-medium text-[#e15241]">
              - 2,744,759
            </span>
            <span className="bg-[#00b4f0] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
              VND
            </span>
          </div>
        </div>

        {/* MAIL BOX Card */}
        <div className="bg-white rounded-md p-4 shadow-sm border border-gray-200/80 flex justify-between items-center">
          <span className="text-sm font-semibold tracking-wider text-gray-700">
            MAIL BOX
          </span>
          <div className="text-gray-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              viewBox="0 0 24 24"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* ADD NEW PRODUCT Button */}
        <div className="pt-2">
          <button
            type="button"
            className="w-full bg-[#f8faf8] border border-[#00be51] text-[#00be51] hover:bg-[#00be51]/5 active:scale-[0.99] font-medium py-3 rounded text-xs tracking-wider uppercase transition-all shadow-sm cursor-pointer"
          >
            ADD NEW PRODUCT
          </button>
        </div>

        {/* Option Link */}
        <div className="text-center pt-4">
          <Link
            href="/login"
            className="text-xs text-gray-400 hover:text-gray-600 underline"
          >
            ← Back to Login
          </Link>
        </div>
      </main>
    </div>
  );
}