'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// Declare Telegram global interface for TypeScript
declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready: () => void;
        expand: () => void;
        requestFullscreen?: () => void;
      };
    };
  }
}

export default function TelegramProvider() {
  const initTelegram = () => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
      webApp.ready();
      webApp.expand();
      
      if (webApp.requestFullscreen) {
        webApp.requestFullscreen();
      }
    }
  };

  return (
    <Script
      src="https://telegram.org/js/telegram-web-app.js"
      strategy="beforeInteractive"
      onLoad={initTelegram}
      onReady={initTelegram}
    />
  );
}