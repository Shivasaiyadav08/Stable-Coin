"use client";

import { useState } from "react";
import { usePublicClient } from "wagmi";
import { CONTRACTADDRESS, ABI } from "../../constants";

export function ReadContract() {
  const publicClient = usePublicClient();

  const [selectedFunction, setSelectedFunction] = useState<string>("");
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});
  const [result, setResult] = useState<unknown>(null); // ✅ unknown instead of any

  // Filter read-only functions
  const functions = ABI.filter(
    f => f.type === "function" && (f.stateMutability === "view" || f.stateMutability === "pure")
  );

  const handleInputChange = (name: string, value: string) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleCall = async () => {
    if (!selectedFunction || !publicClient) return;

    try {
      const fn = ABI.find(f => f.name === selectedFunction);
      if (!fn) return;

      const args = fn.inputs?.length
        ? fn.inputs.map(input => inputs[input.name] || "")
        : [];

      const res = await publicClient.readContract({
        address: CONTRACTADDRESS,
        abi: ABI,
        functionName: selectedFunction,
        args,
      });

      setResult(res);
    } catch (err) {
      console.error(err);
      setResult("Error calling function");
    }
  };

  if (!publicClient)
    return <p className="text-center mt-4">Loading client...</p>;

  return (
    <div className="w-full max-w-full lg:max-w-3xl mx-auto p-6 rounded-xl bg-white shadow-lg space-y-4 mt-6 flex flex-col">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Read Contract</h2>

      {/* Function selector */}
      <select
        value={selectedFunction}
        onChange={e => {
          setSelectedFunction(e.target.value);
          setInputs({});
          setResult(null);
        }}
        className="border p-3 rounded w-full mb-4 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select function</option>
        {functions.map(f => (
          <option key={f.name} value={f.name}>{f.name}</option>
        ))}
      </select>

      {/* Inputs */}
      {selectedFunction &&
        ABI.find(f => f.name === selectedFunction)?.inputs.map(input => (
          <div key={input.name} className="mb-3">
            <input
              type="text"
              placeholder={`${input.name} (${input.type})`}
              value={inputs[input.name] || ""}
              onChange={e => handleInputChange(input.name, e.target.value)}
              className="border p-3 rounded w-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))
      }

      {/* Call button */}
      <button
        onClick={handleCall}
        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded w-full hover:bg-blue-700 transition shadow-md"
      >
        Call Function
      </button>

      {/* Result box */}
      {result !== null && (
        <div className="bg-gray-100 p-4 mt-4 rounded shadow-inner overflow-x-auto overflow-y-auto max-h-[28rem] w-full max-w-full">
          <h3 className="font-semibold mb-2 text-gray-800">Result</h3>
          <pre className="text-gray-800 whitespace-pre-wrap break-all text-sm sm:text-base max-w-full">
            {typeof result === "string"
              ? result
              : JSON.stringify(result, (_, value) => (typeof value === "bigint" ? value.toString() : value), 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
