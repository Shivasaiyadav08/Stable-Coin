# What is DeFi?

DeFi (Decentralized Finance) is a system where financial services are done on blockchain, without banks or middlemen. Everything is peer-to-peer and controlled by smart contracts (programs on blockchain that run automatically).

| Feature      | Normal Finance (CeFi)                  | DeFi                                           |
| ------------ | -------------------------------------- | ---------------------------------------------- |
| Control      | Banks or financial institutions        | Users control their money directly             |
| Intermediary | Required (banks, brokers)              | No intermediaries, smart contracts do the work |
| Access       | Limited by country, account, or credit | Anyone with internet & crypto wallet           |
| Transparency | Transactions are mostly private        | Blockchain is public and transparent           |
| Speed        | Slow (depends on bank timings)         | Fast, 24/7, no holidays                        |
| Costs        | High fees for cross-border transfers   | Low fees (depends on blockchain network)       |


# What we can do in DeFi:

## Lending & Borrowing:
   Lend crypto to earn interest.
   Borrow crypto by giving extra crypto as collateral.
## Trading:
   Swap one crypto for another directly, no bank needed.

## Yield Farming:
   Earn rewards by putting your crypto in pools that help platforms work.
## Insurance:
   Protect your crypto from hacks or losses by paying a small fee.


# Problems with Existing Cryptocurrencies
 ## Price Volatility:
   Cryptos like Bitcoin and Ethereum change value very fast.
  Example: BTC can go up or down 10% in a single day.
  Makes them hard to use for payments, trading, or loans.
 ## Not Reliable for Daily Transactions:
   If you pay with BTC today, its value could drop tomorrow.
   People can lose money unintentionally.
 ## Difficult for Lending & Borrowing:
   Lenders risk losing value if crypto prices drop.
   Borrowers need to deposit extra collateral due to volatility.
 ## Limited Adoption for Businesses:
   Businesses don’t want to accept crypto that keeps changing value.
   Hard to use for salaries, payments, or savings.


# ✅ Why Stablecoins Solve This:
  Stablecoins are pegged to real money (like USD) → value stays stable.
  They allow safe payments, trading, lending, and borrowing in DeFi.
  Reduce the risk of losing money due to crypto price swings.

  # What is Stable coins
  A stable coin is a crypto asset whose buying power stays relatively stable. Unlike bitcoin or ethereum the value does not swing up or down so much


# Examples:
## 1
Imagine Alice wants to pay for her groceries with crypto:
She owns 1 ETH.
Today, 1 ETH = $2,000 → enough to buy groceries.
Tomorrow, ETH crashes to $1,500 → now her grocery payment lost $500 in value.
💡 Problem: Cryptos like ETH, BTC are too volatile for everyday payments or savings.
Now, if Alice uses a stablecoin (like USDC or your stablecoin):
1 stablecoin = $1, always.
She pays $50 worth of stablecoins → value stays $50 regardless of market swings.

## 2
🔹 Step 1: Deposit Collateral → Mint Stablecoin
Alice has 1 ETH = $2,000.
She wants to mint stablecoins.
Rule: System requires 150% collateral ratio (safety margin).
So with $2,000 ETH, Alice can mint up to $1,333 stablecoins.
Why not full $2,000? → To protect against ETH price drops.

🔹 Step 2: Use Stablecoins
Alice spends or invests her 1,333 stablecoins.
These stablecoins stay pegged to $1 each because they are backed by ETH collateral.

🔹 Step 3: Repay & Burn
Later, Alice wants her ETH back.
She must repay 1,333 stablecoins + small interest/fee.
Smart contract burns those stablecoins.
Alice gets back her 1 ETH collateral.

🔹 Step 4: What if ETH Price Drops? (Liquidation)
Suppose ETH falls from $2,000 → $1,500.
Alice’s collateral = $1,500.
But her debt = $1,333 stablecoins.
Now collateral ratio = 112%, below the safe limit (150%).
This is risky → system must act!

🔹 Step 5: Liquidation (How Others Profit)
The protocol opens liquidation.
Another user (Bob) can pay Alice’s debt of 1,333 stablecoins.
In return, Bob gets Alice’s ETH at a discount (say 5–10%).
Example: Bob repays 1,333 stablecoins and gets $1,400 worth of ETH.
Bob makes $67 profit, and system stays safe.

🔹 Why This Works
Alice’s debt is cleared (stablecoins burned).
Bob makes profit by buying discounted ETH.
System stays stable because every stablecoin in circulation is still fully backed by collateral.
✅ Summary in Simple Words:
Deposit collateral → Mint stablecoins.
Repay stablecoins → Get collateral back.
If collateral drops too much → Liquidation happens.
Other users repay the debt and earn profit from collateral discount.
This keeps the stablecoin safe and always pegged near $1.

  # categories and properties
   *** Relative stability ***
   *** stablity Method ***
   *** collateral type ***

## Relative stability 
  ### Pegged/Anchored Stablecoins :
     value is tied to something else, usually the us dollar
     ex: USDC ,USDT , DAI
  ### Floating 
   Not pegged to one asset instead algorithms keep their buying power steady overtime 
   ex:RAI not pegged but tries to keep its value stable with some math

## Stability Method 
 ### Governed : 
  humans or organiztion decide when coins are creasted (minted) or destoryed (burned)
  ex: USDC USDT (circle and tether control them)
 ### Algorithmic :
 controlled by code not the people 
 algorithm automatically mint / burn coin to keep value stable
 ex: UST ,DAI

 ## Collateral Type
  collateral mean swhat backs the stable coin
  ### Exogenous collateral
   outside assets , backed by real world money or external assests 
   ex: usdc -> backed buy real dollar bank 
   if usdc fails the us dollar is itill fine
   DAI -> backed by ETH & other cryptocurriences
 ### Endogenous collateral (inside the system)
  backed by tokens created inside the same protocol
   ex :ust was backed by LUNA - when UST fails LUNA fails too


# Top Stable coins
 1. DAI -> pegged algorithmic and exo
 2. USDC -> pegged governed and exo
 3. UST & LUNA -> pegged algo endo
 4. FRAX ->pegged algo hybrid
 5. RAI -> floating Algo exo


# Design of Stable coin we are going to create
1. Relative Stability: Anchored or Pegged to the US Dollar
   Chainlink Pricefeed
   Function to convert ETH & BTC to USD
2. Stability Mechanism (Minting/Burning): Algorithmicly Decentralized
   Users may only mint the stablecoin with enough collateral
3. Collateral: Exogenous (Crypto)
   wETH
   wBTC


# Working
 