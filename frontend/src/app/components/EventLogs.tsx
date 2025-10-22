"use client";

import { useState } from "react";
import { useWatchContractEvent } from "wagmi";
import { CONTRACTADDRESS, ABI } from "../../constants";

export function EventLogs() {
  const [depositEvents, setDepositEvents] = useState<any[]>([]); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [redeemEvents, setRedeemEvents] = useState<any[]>([]); // eslint-disable-line @typescript-eslint/no-explicit-any

  // Watch the CollateralDeposited event
  useWatchContractEvent({
    address: CONTRACTADDRESS,
    abi: ABI,
    eventName: "CollateralDeposited",
    onLogs(logs) {
      logs.forEach((log) => {
        setDepositEvents((prev) => [log, ...prev].slice(0, 5));
      });
    },
  });

  // Watch the CollateralRedeemed event
  useWatchContractEvent({
    address: CONTRACTADDRESS,
    abi: ABI,
    eventName: "CollateralRedeemed",
    onLogs(logs) {
      logs.forEach((log) => {
        setRedeemEvents((prev) => [log, ...prev].slice(0, 5));
      });
    },
  });

  return (
    <div className="overflow-hidden whitespace-nowrap bg-white text-black py-4 rounded">
      {depositEvents.map((e, i) => (
        <span
          key={`dep-${i}`}
          className="inline-block mx-4 px-3 py-1 bg-blue-600 text-white rounded animate-marquee"
        >
          Deposit: {e.args.user?.slice(0, 6)} → {e.args.amount?.toString()}
        </span>
      ))}
      {redeemEvents.map((e, i) => (
        <span
          key={`red-${i}`}
          className="inline-block mx-4 px-3 py-1 bg-red-600 text-white rounded animate-marquee"
        >
          Redeem: {e.args.redeemFrom?.slice(0, 6)} → {e.args.amount?.toString()}
        </span>
      ))}
    </div>
  );
}