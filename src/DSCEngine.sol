// SPDX-License-Identifier: MIT


// This is considered an Exogenous, Decentralized, Anchored (pegged), Crypto Collateralized low volatility coin​


// Layout of Contract:
// version
// imports
// interfaces, libraries, contracts
// errors
// Type declarations
// State variables
// Events
// Modifiers
// Functions

// Layout of Functions:
// constructor
// receive function (if exists)
// fallback function (if exists)
// external
// public
// internal
// private
// view & pure functions​
pragma solidity ^0.8.18;

/*
 * @title DSCEngine
 * @author Shiva Sai
 *
 * The system is designed to be as minimal as possible, and have the tokens maintain a 1 token == $1 peg at all times.
 * This is a stablecoin with the properties:
 * - Exogenously Collateralized
 * - Dollar Pegged
 * - Algorithmically Stable
 *
 * It is similar to DAI if DAI had no governance, no fees, and was backed by only WETH and WBTC.
 *
 * Our DSC system should always be "overcollateralized". At no point, should the value of
 * all collateral < the $ backed value of all the DSC.
 *
 * @notice This contract is the core of the Decentralized Stablecoin system. It handles all the logic
 * for minting and redeeming DSC, as well as depositing and withdrawing collateral.
 * @notice This contract is based on the MakerDAO DSS system
 */
contract DSCEngine {

    ///////////////////////   FUNCTIONS   ////////////////////


//     Deposit collateral and mint the DSC token

// This is how users acquire the stablecoin, they deposit collateral greater than the value of the DSC minted

// Redeem their collateral for DSC

// Users will need to be able to return DSC to the protocol in exchange for their underlying collateral

// Burn DSC

// If the value of a user's collateral quickly falls, users will need a way to quickly rectify the collateralization of their DSC.

// The ability to liquidate an account

// Because our protocol must always be over-collateralized (more collateral must be deposited then DSC is minted), if a user's collateral value falls below what's required to support their minted DSC, they can be liquidated. Liquidation allows other users to close an under-collateralized position

// View an account's healthFactor

// healthFactor will be defined as a certain ratio of collateralization a user has for the DSC they've minted. As the value of a user's collateral falls, as will their healthFactor, if no changes to DSC held are made. If a user's healthFactor falls below a defined threshold, the user will be at risk of liquidation.

// eg. If the threshold to liquidate is 150% collateralization, an account with $75 in ETH can support $50 in DSC. If the value of ETH falls to $74, the healthFactor is broken and the account can be liquidated

///////////////////////   EXTERNAL FUNCTIONS   /////////////////////////


function depositCollateralAndMintDsc() external {}

    function depositCollateral() external {}
    function redeemCollateralForDsc() external {}

    function redeemCollateral() external {}

    function mintDsc() external {}

    function burnDsc() external {}

    function liquidate() external {}

    function getHealthFactor() external view {}


}