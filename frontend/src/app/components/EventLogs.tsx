"use client";

import { useState } from "react";
import { useWatchContractEvent } from "wagmi";
import { CONTRACTADDRESS, ABI } from "../../constants";

type EventLog = {
  args?: {
    user?: string;
    amount?: bigint;
    redeemFrom?: string;
  };
};

export function EventLogs() {
  const [depositevents, depositsetEvents] = useState<EventLog[]>([]);
  const [redeemevents, redeemsetEvents] = useState<EventLog[]>([]);

  // Watch CollateralDeposited
  useWatchContractEvent({
    address: CONTRACTADDRESS,
    abi: ABI,
    eventName: "CollateralDeposited",
    onLogs(logs) {
      logs.forEach((log) => {
        depositsetEvents((prev) => [...prev, log as EventLog].slice(-5));
      });
    },
  });

  // Watch CollateralRedeemed
  useWatchContractEvent({
    address: CONTRACTADDRESS,
    abi: ABI,
    eventName: "CollateralRedeemed",
    onLogs(logs) {
      logs.forEach((log) => {
        redeemsetEvents((prev) => [...prev, log as EventLog].slice(-5));
      });
    },
  });

  return (
    <div className="overflow-hidden whitespace-nowrap bg-white text-black py-4 rounded">
      {depositevents.map((e, i) => (
        <span
          key={`dep-${i}`}
          className="inline-block mx-4 px-3 py-1 bg-blue-600 text-white rounded animate-marquee"
        >
          Deposit: {e.args?.user?.slice(0, 6)} → {e.args?.amount?.toString()}
        </span>
      ))}
      {redeemevents.map((e, i) => (
        <span
          key={`red-${i}`}
          className="inline-block mx-4 px-3 py-1 bg-red-600 text-white rounded animate-marquee"
        >
          Redeem: {e.args?.redeemFrom?.slice(0, 6)} → {e.args?.amount?.toString()}
        </span>
      ))}
    </div>
  );
}
