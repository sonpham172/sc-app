"use client";

import React from "react";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    {
      label: "Home",
      href: "/home",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      label: "Help & Services",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
    },
    {
      label: "Useful Links",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      label: "Accounts",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h2a2 2 0 012 2v1m-4 0h4" />
        </svg>
      ),
    },
    {
      label: "Transfers",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      label: "Credit Cards",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="1.5" />
          <line x1="2" y1="10" x2="22" y2="10" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      label: "Payments",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      label: "Loans",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      label: "Standing Orders",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  const bottomItems = [
    {
      label: "Update Biometric Information",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457-.39-2.823-1.07-4" />
        </svg>
      ),
    },
    {
      label: "Apply for Products",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: "Locate",
      href: "#",
      external: true,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      label: "Feedback",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H7l-4 4V5z" />
        </svg>
      ),
    },
    {
      label: "About",
      href: "#",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 100 100" fill="none">
          <path d="M20 50 C20 30, 40 20, 60 20 C50 35, 45 45, 45 55 C45 65, 50 75, 60 80 C40 80, 20 70, 20 50 Z" fill="#00c0f3" />
          <path d="M40 80 C50 85, 65 85, 75 75 C85 65, 85 50, 75 40 C75 55, 65 65, 50 70 Z" fill="#00de00" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-[80%] max-w-[320px] bg-gradient-to-b from-[#0a4e69] via-[#0b5f7e] to-[#0d6b88] text-white z-50 overflow-y-auto transition-transform duration-300 ease-out shadow-2xl flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">
          {/* Header Title */}
          <h2 className="text-xl font-light tracking-wide mb-4">
            Standard Chartered
          </h2>

          {/* Quick Toolbar (Inbox, Settings, Logout) */}
          <div className="flex items-center text-xs pb-4 border-b border-cyan-300/20 mb-3 space-x-3 text-cyan-100">
            <div className="flex items-center gap-1.5 cursor-pointer">
              <span>Inbox</span>
              <span className="bg-red-600 text-white text-[10px] font-bold rounded-full px-1.5 py-0.2">
                23
              </span>
            </div>
            <span className="text-cyan-400/40">|</span>
            <div className="flex items-center gap-1 cursor-pointer hover:text-white">
              <span>⚙ Settings</span>
            </div>
            <span className="text-cyan-400/40">|</span>
            <Link
              href="/login"
              onClick={onClose}
              className="flex items-center gap-1 hover:text-white"
            >
              <span>🔒 Logout</span>
            </Link>
          </div>

          {/* Navigation Links List */}
          <nav className="space-y-3.5 pt-2">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3.5 text-sm font-light text-cyan-50 hover:text-white transition-colors"
              >
                <span className="text-cyan-200">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <hr className="my-4 border-cyan-300/20" />

          {/* Secondary Links List */}
          <div className="space-y-3.5 pb-6">
            {bottomItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3.5 text-sm font-light text-cyan-50 hover:text-white transition-colors"
              >
                <span className="text-cyan-200">{item.icon}</span>
                <span className="flex-1">{item.label}</span>
                {item.external && (
                  <span className="text-xs text-cyan-300">↗</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}