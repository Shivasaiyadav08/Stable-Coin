'use client';

import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useEffect, useState } from "react";

export  function ConnectWallet() {
   const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // Avoid SSR mismatch

  return <ConnectButton showBalance={false} />
}