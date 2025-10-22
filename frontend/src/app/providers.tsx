"use client";
import '@rainbow-me/rainbowkit/styles.css';
import { WagmiProvider } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { getDefaultConfig, RainbowKitProvider ,lightTheme} from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string;
const config = getDefaultConfig({
  appName: "Stable Coin",
  projectId,
  chains: [sepolia],
  ssr:false
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider theme={lightTheme({borderRadius:"medium"})} >
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>

    )
}