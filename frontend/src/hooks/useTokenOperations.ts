// hooks/useTokenOperations.ts
"use client";
import { useWriteContract, useAccount, useConfig } from "wagmi";
import { readContract, waitForTransactionReceipt } from "wagmi/actions";
import { useState, useCallback } from "react";

interface TokenOperationParams {
  tokenAddress: `0x${string}`;
  tokenABI: readonly any[];
  spender: `0x${string}`;
  amount: bigint;
}

export const useTokenOperations = () => {
  const { writeContractAsync } = useWriteContract();
  const config = useConfig();
  const { address, isConnected } = useAccount();
  const [loading, setLoading] = useState(false);

  // Reusable approval check and execution
  const checkAndApprove = useCallback(async ({
    tokenAddress,
    tokenABI,
    spender,
    amount
  }: TokenOperationParams): Promise<void> => {
    if (!address) throw new Error("No wallet connected");

    const approvedAmount = await readContract(config, {
      abi: tokenABI,
      address: tokenAddress,
      functionName: "allowance",
      args: [address, spender],
    });

    // Type-safe bigint conversion
    const approvedBigInt = BigInt(approvedAmount as unknown as bigint);

    if (approvedBigInt < amount) {
      const approvalHash = await writeContractAsync({
        abi: tokenABI,
        address: tokenAddress,
        functionName: "approve",
        args: [spender, amount],
      });
      await waitForTransactionReceipt(config, { hash: approvalHash });
    }
  }, [config, writeContractAsync, address]);

  const executeContractWrite = useCallback(async (
    contractConfig: any
  ): Promise<void> => {
    const txHash = await writeContractAsync(contractConfig);
    await waitForTransactionReceipt(config, { hash: txHash });
  }, [writeContractAsync, config]);

  return {
    loading,
    setLoading,
    checkAndApprove,
    executeContractWrite,
    isConnected,
    address
  };
};