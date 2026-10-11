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
        setHeaderColor: (color: string) => void;
        setBackgroundColor: (color: string) => void;
        disableVerticalSwipes: () => void;
        enableClosingConfirmation: () => void;
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

      webApp.setHeaderColor('transparent'); // Use your app's exact background hex color
      webApp.setBackgroundColor('transparent');
      
      
      if (webApp.requestFullscreen) {
        webApp.requestFullscreen();
      }

      if (webApp.disableVerticalSwipes) {
    webApp.disableVerticalSwipes();
  }

  // Shows confirmation modal if the user tries to exit
  webApp.enableClosingConfirmation();
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