"use client";

import { useState, useEffect } from "react";
import { useAccount, useWalletClient, usePublicClient } from "wagmi";
import { CONTRACTADDRESS, ABI } from "../../constants";

export function WriteContract() {
  const { isConnected } = useAccount();
  const walletClient = useWalletClient().data;
  const publicClient = usePublicClient();

  const [mounted, setMounted] = useState(false);
  const [selectedFunction, setSelectedFunction] = useState<string>("");
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});
  const [txHash, setTxHash] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [errorReason, setErrorReason] = useState<string | null>(null);

  // Prevent SSR mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  if (!isConnected || !walletClient)
    return (
      <p className="text-center text-red-500 font-medium mt-4">
        Please connect your wallet
      </p>
    );

  const writeFunctions = ABI.filter(
    f => f.type === "function" && f.stateMutability === "nonpayable"
  );

  const handleInputChange = (name: string, value: string) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleSend = async () => {
    if (!selectedFunction) return;
    const fn = ABI.find(f => f.name === selectedFunction);
    if (!fn) return;

    try {
      setErrorReason(null);

      const args = fn.inputs?.map(input => {
        const value = inputs[input.name] || "";
        return input.type.includes("uint") ? BigInt(value) : value;
      }) || [];

      setStatus("Sending transaction...");

      const tx = await walletClient.writeContract({
        address: CONTRACTADDRESS,
        abi: ABI,
        functionName: selectedFunction,
        args,
      });

      // Handle transaction hash safely
      const txHashStr =
        typeof tx === "string" ? tx : (tx as { hash?: string }).hash;
      if (!txHashStr) throw new Error("Transaction hash not found");

      setTxHash(txHashStr);
      setStatus("Transaction sent. Waiting for confirmation...");

      if (!publicClient) {
        setStatus("Public client not available");
        return;
      }

      await publicClient.waitForTransactionReceipt({
        hash: txHashStr as `0x${string}`,
      });

      setStatus("Transaction confirmed!");
    } catch (err) {
      console.error(err);

      // Safely extract error message
      const reason =
        err instanceof Error
          ? err.message
          : (err as { reason?: string; shortMessage?: string })?.shortMessage ||
            (err as { reason?: string; shortMessage?: string })?.reason ||
            "Unknown error";

      setErrorReason(reason);
      setStatus("Transaction failed");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 rounded-xl bg-white shadow-lg space-y-4 mt-6 flex flex-col">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Write Contract</h2>

      <select
        value={selectedFunction}
        onChange={e => {
          setSelectedFunction(e.target.value);
          setInputs({});
          setTxHash(null);
          setStatus(null);
          setErrorReason(null);
        }}
        className="border p-3 rounded w-full mb-4 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select function</option>
        {writeFunctions.map(f => (
          <option key={f.name} value={f.name}>
            {f.name}
          </option>
        ))}
      </select>

      {selectedFunction &&
        ABI.find(f => f.name === selectedFunction)?.inputs.map(input => (
          <div key={input.name} className="mb-3">
            <input
              type="text"
              placeholder={`${input.name} (${input.type})`}
              value={inputs[input.name] || ""}
              onChange={e => handleInputChange(input.name, e.target.value)}
              className="border p-3 rounded w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>
        ))}

      <button
        onClick={handleSend}
        className="bg-green-600 text-white font-semibold px-6 py-3 rounded w-full hover:bg-green-700 transition shadow-md"
      >
        Send Transaction
      </button>

      {status && <p className="mt-2 font-medium text-center text-gray-700">{status}</p>}
      {errorReason && (
        <p className="mt-1 font-medium text-center text-red-600 break-words">
          Reason: {errorReason}
        </p>
      )}
      {txHash && (
        <p className="mt-2 break-all text-blue-600 text-center font-mono">
          Transaction Hash: {txHash}
        </p>
      )}
    </div>
  );
}
