
"use client";

export function About() {
    return (

        <section className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-2xl shadow-lg p-6 md:p-10 mt-10 text-gray-800 text-center">
            <h2 className="text-3xl font-bold mb-4">About StableCoin DApp</h2>
            <p className="text-lg leading-relaxed">
                The StableCoin DApp allows users to mint decentralized stablecoins by depositing
                collateral assets like <span className="font-semibold">wETH</span> or <span className="font-semibold">wBTC</span>.
                Once deposited, the collateral is locked within the protocol.
                Users can mint stablecoins up to a safe collateralization ratio (e.g., <span className="font-semibold">150%</span>).
            </p>

            <p className="text-lg leading-relaxed mt-4">
                These stablecoins circulate freely — users can spend, lend, or provide liquidity.
                The protocol constantly monitors the collateral ratio using <span className="font-semibold">Chainlink price feeds</span>.
                If the ratio drops below the liquidation threshold (e.g., <span className="font-semibold">120%</span>),
                liquidators can repay the user’s debt in exchange for collateral at a discounted rate (the <span className="font-semibold">liquidation bonus</span>).
            </p>

            <p className="text-lg leading-relaxed mt-4">
                Stablecoins used for liquidation are <span className="font-semibold">burned</span>,
                and the collateral is transferred to the liquidator.
                If users repay their full debt plus fees, they can call the <span className="font-semibold">burn & withdraw</span> function
                to burn their stablecoins and release their locked collateral.
            </p>
        </section>

    )
}