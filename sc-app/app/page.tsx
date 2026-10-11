"use client";

import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "./components/Sidebar";

export default function WelcomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      className="relative min-h-screen text-white font-sans flex flex-col justify-between selection:bg-emerald-500 selection:text-white bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{ backgroundImage: "url('/background.jpeg')" }}
    >
      {/* Sidebar Component */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* Top Bar */}
      <header className="p-5 flex justify-between items-center z-10">
        <button
          type="button"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open Menu"
          className="relative p-2 focus:outline-none group cursor-pointer"
        >
          <div className="w-6 h-[2px] bg-white mb-1 transition-all"></div>
          <div className="w-6 h-[2px] bg-white mb-1 transition-all"></div>
          <div className="w-4 h-[2px] bg-white transition-all group-hover:w-6"></div>
          <span className="absolute -top-1 left-4 bg-rose-600 text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-black">
            21
          </span>
        </button>

        {/* Standard Chartered Logo */}
        <div className="flex items-center gap-2">
          <svg className="w-9 h-9" viewBox="0 0 100 100" fill="none">
            <path
              d="M20 50 C20 30, 40 20, 60 20 C50 35, 45 45, 45 55 C45 65, 50 75, 60 80 C40 80, 20 70, 20 50 Z"
              fill="#00c0f3"
            />
            <path
              d="M40 80 C50 85, 65 85, 75 75 C85 65, 85 50, 75 40 C75 55, 65 65, 50 70 Z"
              fill="#00de00"
            />
          </svg>
          <div className="flex flex-col text-[13px] font-bold tracking-tight leading-none text-white drop-shadow-sm">
            <span>standard</span>
            <span className="text-gray-200 font-normal">chartered</span>
          </div>
        </div>
      </header>

      {/* Main Content Greeting */}
      <main className="px-6 flex-1 flex items-center z-10">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-3xl font-normal tracking-wide drop-shadow-md">
            Good Evening
          </h1>
          <Link
            href="/login"
            className="bg-[#00be51] hover:bg-[#00a345] active:scale-95 text-white font-semibold px-5 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg"
          >
            <span>LOGIN</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="5" y="11" width="14" height="10" rx="2" strokeWidth="2" />
              <path
                d="M8 11V7a4 4 0 118 0v4"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </div>
      </main>

      {/* Bottom Card Promo */}
      <footer className="p-4 z-10">
        <div className="bg-[#dcdfdc] text-gray-900 rounded-xl p-4 flex justify-between items-end shadow-md">
          <div>
            <h2 className="text-lg font-bold">Apply for Products</h2>
            <p className="text-sm text-gray-600 mt-0.5">Find out More</p>
          </div>
          <div className="text-[#00a345]">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}