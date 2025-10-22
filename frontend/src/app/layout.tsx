"use client";

import './globals.css';
import { Providers } from './providers';
import { ConnectWallet } from './components/ConnectWallet';
import Link from 'next/link';

 const metadata = {
  title: 'Stable Coin DApp',
  description: 'Interact with your Decentralized Stable Coin contract',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Decentralized Stable Coin</title>
        
      </head>
      <body className="bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 min-h-screen flex flex-col scroll-smooth">

        <Providers>
          {/* Header */}
          <header className="w-full fixed top-0 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 sm:px-6 py-4 sm:py-6 shadow-2xl rounded-b-3xl backdrop-blur-md z-50">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-center sm:text-left drop-shadow-lg">
              💎 StableCoin DApp
            </h1>

            <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-end w-full sm:w-auto flex-wrap">
              
              <Link href="#liveevents" className="hover:underline whitespace-nowrap">
                Live Events
              </Link>
              <Link href="#about" className="hover:underline whitespace-nowrap">
                About Us
              </Link>
              <ConnectWallet />
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 w-full flex flex-col items-center justify-start pt-36 sm:pt-40 px-4 sm:px-6 lg:px-8 space-y-8">
            {/* flex-wrap for children ensures they stack on small screens */}
            <div className="flex flex-col lg:flex-row flex-wrap gap-8 w-full max-w-full items-stretch justify-center">
              {children}
            </div>
          </main>

          {/* Footer */}
          <footer className="w-full text-center py-6 text-gray-700 text-sm md:text-base bg-gradient-to-r fixed bottom-0 from-purple-200 via-pink-200 to-yellow-100 rounded-t-3xl shadow-inner mt-12">
            © 2025 Stable Coin DApp
          </footer>
        </Providers>
      </body>
    </html>
  );
}
