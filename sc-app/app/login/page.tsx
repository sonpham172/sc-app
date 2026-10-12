"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Giả lập thời gian loading 1.2 giây trước khi redirect sang /home
    setTimeout(() => {
      router.push("/home");
    }, 1200);
  };

  const handleQuickLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/home");
    }, 1200);
  };

  return (
    <div
      className="relative min-h-screen text-white p-6 flex flex-col justify-between selection:bg-emerald-500 selection:text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.jpeg')" }}
    >
      {/* Dark Overlay giúp form rõ ràng hơn trên nền hoa văn */}
      <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px] pointer-events-none" />

      {/* Top Close Icon */}
      <div className="flex justify-end pt-2 z-10">
        <Link
          href="/"
          className="text-gray-300 hover:text-white p-2 text-2xl font-light transition-colors"
          aria-label="Close"
        >
          ✕
        </Link>
      </div>

      {/* Main Form Container */}
      <div className="max-w-md w-full mx-auto my-auto py-6 z-10">
        {/* Title & Country Flag */}
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-2xl sm:text-3xl font-normal leading-snug tracking-wide drop-shadow-sm">
            Login to
            <br />
            Mobile Banking
          </h1>
          <div className="flex items-center pl-4 border-l border-neutral-500/50">
            <div className="w-8 h-5 bg-red-600 rounded-[2px] flex items-center justify-center shadow-sm overflow-hidden relative">
              <span className="text-yellow-400 text-xs select-none">★</span>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="bg-[#2a2a2a]/90 rounded-lg overflow-hidden border border-neutral-600/50 shadow-lg backdrop-blur-md">
            {/* Username Input */}
            <div className="border-b border-neutral-600/60 px-4 py-3">
              <input
                type="text"
                placeholder="Username"
                value={username}
                disabled={isLoading}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none text-base disabled:opacity-50"
              />
            </div>

            {/* Password Input */}
            <div className="px-4 py-3 flex items-center justify-between">
              <input
                type="password"
                placeholder="Password"
                value={password}
                disabled={isLoading}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none text-base pr-2 disabled:opacity-50"
              />
              <button
                type="button"
                className="text-[11px] text-gray-300 hover:text-white tracking-wider font-medium uppercase whitespace-nowrap"
              >
                FORGOT?
              </button>
            </div>
          </div>

          {/* Action Buttons: LOGIN & Face ID */}
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-[#00be51] hover:bg-[#00a345] active:scale-[0.98] disabled:opacity-80 text-white font-semibold py-3.5 rounded-lg text-center transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              {isLoading ? (
                <>
                  {/* Spinner Loading Animation */}
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>LOGGING IN...</span>
                </>
              ) : (
                <span>LOGIN</span>
              )}
            </button>

            {/* Biometric / Face ID Button */}
            <button
              type="button"
              onClick={handleQuickLogin}
              disabled={isLoading}
              className="w-14 h-[50px] border border-[#00be51] bg-black/20 rounded-lg flex items-center justify-center text-[#00be51] hover:bg-[#00be51]/20 active:scale-95 transition-all shadow-md disabled:opacity-50 cursor-pointer"
              title="Quick Face ID Login"
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-[#00be51]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 3H5a2 2 0 00-2 2v2m0 10v2a2 2 0 002 2h2m10-14h2a2 2 0 012 2v2m0 10v2a2 2 0 01-2 2h-2M9 9h.01M15 9h.01M10 15c.5.5 1.5 1 2 1s1.5-.5 2-1"
                  />
                </svg>
              )}
            </button>
          </div>
        </form>

        {/* Register Link */}
        <div className="mt-8 text-sm">
          <p className="text-gray-300">New to Online Banking?</p>
          <a
            href="#"
            className="text-[#00be51] hover:underline font-medium inline-block mt-1"
          >
            Register Here
          </a>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-6 z-10"></div>
    </div>
  );
}