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
## example 1
Imagine Alice wants to pay for her groceries with crypto:
She owns 1 ETH.
Today, 1 ETH = $2,000 → enough to buy groceries.
Tomorrow, ETH crashes to $1,500 → now her grocery payment lost $500 in value.
💡 Problem: Cryptos like ETH, BTC are too volatile for everyday payments or savings.
Now, if Alice uses a stablecoin (like USDC or your stablecoin):
1 stablecoin = $1, always.
She pays $50 worth of stablecoins → value stays $50 regardless of market swings.

## example 2

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
User deposits collateral (wETH / wBTC) → collateral is locked in the protocol.
User mints stablecoins up to a safe collateralization ratio (e.g., 150%).
Stablecoins circulate — user can spend, lend, or provide liquidity.
Protocol constantly checks collateral ratio using Chainlink price feeds.
If ratio falls below liquidation threshold (e.g., 120%) → protocol allows liquidation.
Liquidator repays debt (stablecoins) and receives collateral at a discounted price (liquidation bonus).
Stablecoins used to repay debt are burned. Collateral transferred to liquidator.
If user repays full debt + fees, they call burn & withdraw → stablecoins burned, collateral released.

| Total collateral (USD) | Collateral % (threshold) | Debt you’re allowed |
| ---------------------- | ------------------------ | ------------------- |
| \$10,000               | 80%                      | \$8,000             |
| \$10,000               | 60%                      | \$6,000             |
| \$10,000               | 90%                      | \$9,000             |


# Token
A token is just a digital asset created on top of a blockchain.
It isn’t the main coin of that blockchain — instead, it’s made with smart contracts.

## ERC

ERC = Ethereum Request for Comment.

It’s a proposal that defines how smart contracts should behave so that wallets, DEXs, and other dApps can interact with them consistently.

Once approved by the community, it becomes a formal Ethereum standard.

Think of ERCs like USB specifications for hardware: if everyone follows the same plug standard, everything works together.

## Main erc standards
| ERC          | Purpose                                          | Examples               |
| ------------ | ------------------------------------------------ | ---------------------- |
| **ERC-20**   | Fungible tokens (all units are interchangeable). | USDC, DAI, LINK        |
| **ERC-721**  | Non-fungible tokens (NFTs, unique IDs).          | CryptoPunks, Bored Ape |
| **ERC-1155** | Multi-asset contract (can hold fungible + NFTs). | Game items (Enjin)     |
| **ERC-4626** | Tokenized vaults/yield-bearing assets.           | Yearn vault shares     |
| **ERC-777**  | Advanced fungible token (hooks, operator model). | Some DeFi tokens       |

 

# Relationship between stable coin and erc20

1️⃣ A stablecoin is just a token
On Ethereum, stablecoins aren’t special coins built into the blockchain — they’re smart contracts that track who owns how many units.

To make them work everywhere, developers build them as ERC-20 tokens.

2️⃣ ERC-20 = a shared rulebook

ERC-20 defines a few basic functions every wallet and app understands:

balanceOf(address) → check how many tokens someone owns

transfer(address, amount) → send tokens

approve(spender, amount) & transferFrom() → let apps move your tokens with permission

If you follow these rules, any ERC-20 wallet or exchange can read balances and send your token without extra coding.

3️⃣ Stablecoin-specific logic

On top of ERC-20’s basic rules, the contract adds:

Mint → create new tokens when someone deposits dollars/crypto

Burn → destroy tokens when someone redeems

Collateral checks / price oracles → keep value close to $1

So the “stable” part is just extra code — the token interface stays standard.

4️⃣ Why that matters

Your token automatically works with:

Wallet apps (MetaMask, Coinbase Wallet)

DEXs (Uniswap, Curve)

Lending protocols (Aave, Compound)

Payment gateways

No one has to write a custom integration for your stablecoin.

5️⃣ Without ERC-20

If you invented your own custom interface, every wallet/exchange would need to learn it first — most wouldn’t bother.

Adoption would be slow or impossible.

# CodeFlow
## DecentralizedStableCoin.sol
  Contract is inherited BurnableERC20 instead of erc20 beacuse
- It consist of two functions mint and burn function to burn and mint the token
- ERC20 → has a hidden (internal) burn function. Only the contract itself can use it, not normal users.
- ERC20Burnable → adds public burn functions so anyone (or owner) can burn tokens easily.
- Your contract uses ERC20Burnable so that:
- You (the owner) can burn tokens whenever needed.
- You don’t need to rewrite the burn logic — it’s already safely built in.

## DSCEngine
  *** constructor ***: The DSC Engine constructor takes the arry of token  address (address of collateral token (wetgh and wbtc)) and their priceFeeds and address of dsc
  *** Functions ***
  1. depositCollateral : 
      - It takes token address and amount to be keep as collateral
      - It transfers token collateral from the msg.sender to our contract address
      - this way msg.sender deposit collateral to contract
  2. mintDsc : 
      - amountDscToMint The amount of DSC you want to mint . You can only mint DSC if you have  enough collateral
      - It takes amountDscToMint 
      - we check revert if healthfactor is low using ***_revertIfHealthFactorIsBroken(msg.sender)*** of msg.sender
   


   
  
# Important topics 
 ![alt text](image.png)

 ## liquidation working 
 User deposited $100 in collateral and mints $50 in DSC

Collateral value falls to $75, breaking the user's Health Factor (0.75)

A liquidator burns $50 in DSC to close the position

The liquidator is rewarded $75 in collateral

The liquidator has profited $25

## openzeppelin
 *** https://github.com/OpenZeppelin/openzeppelin-contracts ***
 to install in foundry
```forge install openzeppelin/openzeppelin-contracts```
## chainlink orcale 
 ```forge install smartcontractkit/chainlink-brownie-contracts@latest```
## fuzz testing 
  Fuzzing is a way to test your contract (or any program) by sending random or unexpected inputs to find bugs.
  Instead of testing one input at a time manually, fuzzing tries lots of inputs automatically.
  Helps catch errors like overflow, invalid states, or security bugs.




# Documentation
# Decentralized Stable Coin (DSC) Protocol

A decentralized overcollateralized stablecoin protocol inspired by MakerDAO DSS.  
The protocol allows users to deposit collateral assets such as ETH and BTC, mint a USD-pegged decentralized stablecoin (DSC), redeem collateral, burn DSC, and liquidate unhealthy positions.

---

# Table of Contents

1. Introduction
2. Features
3. System Architecture
4. Workflow
5. Smart Contracts
6. Oracle System
7. Health Factor Mechanism
8. Liquidation Mechanism
9. Security Features
10. Installation
11. Project Structure
12. Build & Compile
13. Deployment
14. Testing
15. Key Formulas
16. Events
17. Risks & Limitations
18. Future Improvements
19. License
20. Authors

---

# 1. Introduction

The Decentralized Stable Coin (DSC) protocol is an overcollateralized stablecoin system designed to maintain a 1 DSC = 1 USD peg.

The system is:

- Exogenously Collateralized
- Algorithmically Stable
- Overcollateralized
- Decentralized

The protocol is inspired by MakerDAO but simplified by removing governance, fees, and complex mechanisms.

---

# 2. Features

## Core Features

- Deposit collateral assets
- Mint DSC stablecoins
- Burn DSC tokens
- Redeem collateral
- Liquidate unhealthy positions
- Chainlink price feed integration
- Stale oracle protection
- Reentrancy protection
- Health factor enforcement

---

# 3. System Architecture

## Main Contracts

| Contract | Description |
|----------|-------------|
| OracleLib.sol | Protects protocol from stale oracle data |
| DSCEngine.sol | Core logic contract |
| DecentralizedStableCoin.sol | ERC20 stablecoin implementation |

---

# 4. Workflow

## Stablecoin Minting Flow

```text
User Deposits Collateral
            │
            ▼
DSCEngine Stores Collateral
            │
            ▼
Fetch Price From Chainlink
            │
            ▼
Calculate Health Factor
            │
            ▼
If Safe → Mint DSC
If Unsafe → Revert
```

---

# 5. Smart Contracts

---

## 5.1 OracleLib.sol

### Purpose

The OracleLib library validates Chainlink oracle data and prevents the protocol from operating on stale prices.

### Key Features

- Stale price detection
- Oracle validation
- Timeout protection

### Timeout

```solidity
uint256 private constant TIMEOUT = 3 hours;
```

If oracle data becomes older than 3 hours, the transaction reverts.

### Main Function

```solidity
function staleCheckLatestRoundData()
```

### Function Flow

```text
Get latest Chainlink price
        │
        ▼
Check updatedAt != 0
        │
        ▼
Check answeredInRound >= roundId
        │
        ▼
Check timestamp freshness
        │
        ▼
Return valid price data
```

### Validation Checks

| Check | Purpose |
|-------|----------|
| updatedAt == 0 | Invalid oracle response |
| answeredInRound < roundId | Incomplete oracle round |
| secondsSince > TIMEOUT | Stale oracle data |

---

## 5.2 DSCEngine.sol

### Purpose

The DSCEngine contract manages:

- Collateral deposits
- DSC minting
- Burning DSC
- Collateral redemption
- Liquidation logic
- Health factor calculations

---

### State Variables

#### Stablecoin Reference

```solidity
DecentralizedStableCoin private immutable i_dsc;
```

#### Liquidation Threshold

```solidity
uint256 private constant LIQUIDATION_THRESHOLD = 50;
```

Users must maintain 200% collateralization.

#### Liquidation Bonus

```solidity
uint256 private constant LIQUIDATION_BONUS = 10;
```

Liquidators receive a 10% bonus.

#### Minimum Health Factor

```solidity
uint256 private constant MIN_HEALTH_FACTOR = 1e18;
```

Accounts below this become liquidatable.

---

### Storage Mappings

#### Price Feeds

```solidity
mapping(address => address) private s_priceFeeds;
```

Stores token → Chainlink feed mappings.

---

#### Collateral Deposits

```solidity
mapping(address => mapping(address => uint256))
private s_collateralDeposited;
```

Tracks user collateral balances.

---

#### DSC Minted

```solidity
mapping(address => uint256) private s_DSCMinted;
```

Tracks minted DSC debt.

---

### Constructor Flow

```text
Receive:
- collateral token addresses
- price feed addresses
- DSC contract address

        │
        ▼

Validate array lengths

        │
        ▼

Store token → feed mappings

        │
        ▼

Initialize DSC token
```

---

### Main Functionalities

---

### Deposit Collateral

```solidity
function depositCollateral()
```

Allows users to deposit approved collateral tokens.

#### Flow

```text
Validate Amount > 0
        │
        ▼
Validate Allowed Token
        │
        ▼
Update Storage
        │
        ▼
Transfer ERC20 Tokens
        │
        ▼
Emit Event
```

---

### Mint DSC

```solidity
function mintDsc()
```

Allows users to mint stablecoins against collateral.

#### Process

```text
Increase Minted DSC
        │
        ▼
Check Health Factor
        │
        ▼
If Healthy:
    Mint DSC
Else:
    Revert
```

---

### Redeem Collateral

```solidity
function redeemCollateral()
```

Allows users to withdraw collateral.

#### Requirements

- Must maintain healthy collateralization
- Cannot break health factor

---

### Burn DSC

```solidity
function burnDsc()
```

Reduces user debt and improves health factor.

---

### Liquidation

```solidity
function liquidate()
```

Allows liquidation of unhealthy positions.

#### Liquidation Process

```text
Check User Health Factor
            │
            ▼
If Below Minimum:
            │
            ▼
Calculate Debt Coverage
            │
            ▼
Calculate Bonus Collateral
            │
            ▼
Transfer Collateral to Liquidator
            │
            ▼
Burn DSC Debt
            │
            ▼
Verify Health Improvement
```

---

## 5.3 DecentralizedStableCoin.sol

### Purpose

ERC20 stablecoin implementation.

Built using:

- OpenZeppelin ERC20
- ERC20Burnable
- Ownable

---

### Features

| Feature | Description |
|----------|-------------|
| Minting | Owner-only minting |
| Burning | Owner-only burning |
| ERC20 | Standard token implementation |
| Access Control | Ownable |

---

### Mint Function

```solidity
function mint(address to, uint256 amount)
```

#### Validations

- Address cannot be zero
- Amount must be greater than zero

---

### Burn Function

```solidity
function burn(uint256 amount)
```

#### Validations

- Amount > 0
- Sufficient balance required

---

# 6. Oracle System

The protocol uses Chainlink price feeds for collateral valuation.

## Oracle Safety Checks

The system validates:

- Oracle timestamp
- Round completeness
- Data freshness

## Stale Oracle Protection

If Chainlink data becomes stale:

- Protocol operations revert
- Minting/redeeming stops
- Protocol enters safe mode

This prevents bad debt and incorrect liquidations.

---

# 7. Health Factor Mechanism

The health factor determines whether a position is safe.

## Formula

```text
Health Factor =
(Collateral Value × Liquidation Threshold)
÷ Total DSC Minted
```

---

## Interpretation

| Health Factor | Status |
|---------------|--------|
| > 1 | Safe |
| = 1 | At risk |
| < 1 | Liquidatable |

---

## Example

Collateral Value = $200

Minted DSC = $100

Liquidation Threshold = 50%

```text
HF = (200 × 0.5) ÷ 100
HF = 1
```

The account is exactly at liquidation threshold.

---

# 8. Liquidation Mechanism

If a user's health factor drops below 1:

- Anyone can liquidate the position
- Liquidator burns DSC
- Liquidator receives collateral + bonus

---

## Liquidation Bonus

```solidity
LIQUIDATION_BONUS = 10;
```

Liquidators receive 10% additional collateral.

---

## Example

Debt covered = $100

Liquidator receives:

- $100 collateral
- +10% bonus
- Total = $110 collateral

---

# 9. Security Features

## Reentrancy Protection

Uses OpenZeppelin ReentrancyGuard.

Protected functions:

- depositCollateral
- redeemCollateral
- mintDsc
- liquidate

---

## Oracle Staleness Protection

Uses OracleLib to prevent stale price usage.

---

## Health Factor Enforcement

All critical operations validate solvency.

---

## Custom Errors

Gas-efficient custom Solidity errors are used throughout the protocol.

---

# 10. Installation

## Prerequisites

Install:

- Foundry
- Git

---

## Clone Repository

```bash
git clone <repository-url>
cd dsc-protocol
```

---

## Install Dependencies

```bash
forge install
```

---

# 11. Project Structure

```text
/contracts
    ├── DSCEngine.sol
    ├── DecentralizedStableCoin.sol
    └── libraries
            └── OracleLib.sol

/script
    └── Deploy.s.sol

/test
    └── DSCEngineTest.t.sol

/lib
```

---

# 12. Build & Compile

## Build Contracts

```bash
forge build
```

---

## Format Code

```bash
forge fmt
```

---

# 13. Deployment

## Local Deployment

```bash
forge script script/Deploy.s.sol
```

---

## Testnet Deployment

```bash
forge script script/Deploy.s.sol \
--rpc-url <RPC_URL> \
--private-key <PRIVATE_KEY> \
--broadcast
```

---

# 14. Testing

## Run Tests

```bash
forge test
```

---

## Verbose Testing

```bash
forge test -vvvv
```

---

## Gas Snapshot

```bash
forge snapshot
```

---

## Coverage

```bash
forge coverage
```

---

# 15. Key Formulas

## Health Factor

```text
HF =
(Collateral × LiquidationThreshold)
÷ DSCMinted
```

---

## USD Value Calculation

```text
USDValue =
((Price × 1e10) × Amount)
÷ 1e18
```

---

## Token Amount From USD

```text
TokenAmount =
(USD × 1e18)
÷ (Price × 1e10)
```

---

# 16. Events

## CollateralDeposited

```solidity
event CollateralDeposited(
    address indexed user,
    address indexed token,
    uint256 indexed amount
);
```

Triggered when collateral is deposited.

---

## CollateralRedeemed

```solidity
event CollateralRedeemed(
    address indexed redeemFrom,
    address indexed redeemTo,
    address token,
    uint256 amount
);
```

Triggered during redemption or liquidation.

---

# 17. Risks & Limitations

| Risk | Description |
|------|-------------|
| Oracle Failure | Protocol freezes |
| Market Crash | Rapid collateral collapse |
| Stablecoin Depeg | Severe market volatility |
| Insolvency | Edge-case liquidation issues |

---

# 18. Future Improvements

Potential upgrades:

- Multi-oracle support
- Governance system
- Dynamic collateral ratios
- Stability fees
- Emergency shutdown
- More collateral types
- Cross-chain deployment

---

# 19. License

MIT License

---

# 20. Authors

## Authors

Shiva Sai,
Hemanth,
Sai Kumar

---

# Conclusion

The DSC protocol demonstrates how decentralized stablecoins can maintain stability using:

- Overcollateralization
- Health factor enforcement
- Chainlink oracle validation
- Liquidation mechanisms

This project serves as a strong foundation for understanding decentralized finance (DeFi), lending systems, and stablecoin architecture similar to MakerDAO.

