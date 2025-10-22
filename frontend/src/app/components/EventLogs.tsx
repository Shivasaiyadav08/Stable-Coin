"use client";

import { useState } from "react";
import { useWatchContractEvent } from "wagmi";
import { CONTRACTADDRESS, ABI } from "../../constants";

export function EventLogs() {
  const [depositEvents, setDepositEvents] = useState<readonly unknown[]>([]);
  const [redeemEvents, setRedeemEvents] = useState<readonly unknown[]>([]);

  // Watch CollateralDeposited
  useWatchContractEvent({
    address: CONTRACTADDRESS,
    abi: ABI,
    eventName: "CollateralDeposited",
    onLogs(logs) {
      setDepositEvents((prev) => [...logs, ...prev].slice(0, 5));
    },
  });

  // Watch CollateralRedeemed
  useWatchContractEvent({
    address: CONTRACTADDRESS,
    abi: ABI,
    eventName: "CollateralRedeemed",
    onLogs(logs) {
      setRedeemEvents((prev) => [...logs, ...prev].slice(0, 5));
    },
  });

  return (
    <div className="overflow-hidden whitespace-nowrap bg-white text-black py-4 rounded">
      {depositEvents.map((e, i) => {
        const args = (e as any).args; // safe access without ESLint any errors if you use // eslint-disable-next-line
        return (
          <span
            key={`dep-${i}`}
            className="inline-block mx-4 px-3 py-1 bg-blue-600 text-white rounded animate-marquee"
          >
            Deposit: {String(args?.user)?.slice(0, 6)} → {String(args?.amount)}
          </span>
        );
      })}

      {redeemEvents.map((e, i) => {
        const args = (e as any).args;
        return (
          <span
            key={`red-${i}`}
            className="inline-block mx-4 px-3 py-1 bg-red-600 text-white rounded animate-marquee"
          >
            Redeem: {String(args?.redeemFrom)?.slice(0, 6)} → {String(args?.amount)}
          </span>
        );
      })}
    </div>
  );
}
