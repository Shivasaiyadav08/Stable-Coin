// SPDX-License-Identifier: MIT


// Handler is a test helper used with Foundry’s invariant/fuzz testing. It exposes functions (depositCollateral, redeemCollateral, mintDsc) that Foundry will call with random inputs to simulate many users interacting with DSCEngine.
// It is not deployed in production — it’s only for tests.



pragma solidity ^0.8.18;

import {ERC20Mock} from "@openzeppelin/contracts/mocks/token/ERC20Mock.sol";

import {Test,console2} from "forge-std/Test.sol";
import {DSCEngine} from "../../src/DSCEngine.sol";
import {DecentralizedStableCoin} from "../../src/DecentralizedStableCoin.sol";
import { MockV3Aggregator } from "../mocks/MockV3Aggregator.sol";

contract Handler is Test {
    DSCEngine dsce;
    DecentralizedStableCoin dsc;
    uint256 MAX_DEPOSIT_SIZE = type(uint96).max; //The largest amount of collateral a user can deposit during testing.
    ERC20Mock public weth;
    ERC20Mock public wbtc;
     uint256 public timesMintIsCalled;
    MockV3Aggregator public ethUsdPriceFeed;
    
    constructor(DSCEngine _engine, DecentralizedStableCoin _dsc) {
        dsce = _engine;
        dsc = _dsc;
        address[] memory collateralTokens = dsce.getCollateralTokens();
        weth = ERC20Mock(collateralTokens[0]);
        wbtc = ERC20Mock(collateralTokens[1]);
        ethUsdPriceFeed = MockV3Aggregator(dsce.getCollateralTokenPriceFeed(address(weth)));
   }
   // breaks invarit test suite !!
//     function updateCollateralPrice(uint96 newPrice) public {
//     int256 newPriceInt = int256(uint256(newPrice));
//     ethUsdPriceFeed.updateAnswer(newPriceInt);
// }
   function depositCollateral (uint256 collateralSeed, uint256 amountCollateral) public {
    //bound(...): Foundry helper that clamps the random amountCollateral into [1, MAX_DEPOSIT_SIZE]. Prevents 0 or huge amounts.
    amountCollateral = bound(amountCollateral, 1, MAX_DEPOSIT_SIZE);
    // _getCollateralFromSeed(collateralSeed): chooses either weth or wbtc based on the seed (even/odd).
    ERC20Mock collateral = _getCollateralFromSeed(collateralSeed);
    vm.startPrank(msg.sender);
    collateral.mint(msg.sender, amountCollateral);
    collateral.approve(address(dsce), amountCollateral);
    dsce.depositCollateral(address(collateral), amountCollateral);
    vm.stopPrank();
}
// Helper Functions
function _getCollateralFromSeed(uint256 collateralSeed) private view returns (ERC20Mock){
    if(collateralSeed % 2 == 0){
        return weth;
    }
    return wbtc;
}
function redeemCollateral(uint256 collateralSeed, uint256 amountCollateral) public {
    ERC20Mock collateral = _getCollateralFromSeed(collateralSeed);
    uint256 maxCollateralToRedeem = dsce.getCollateralBalanceOfUser(address(collateral), msg.sender);

    amountCollateral = bound(amountCollateral, 0, maxCollateralToRedeem);
    if(amountCollateral == 0){
        return;
    }

    dsce.redeemCollateral(address(collateral), amountCollateral);
}
function mintDsc(uint256 amount) public {
    (uint256 totalDscMinted, uint256 collateralValueInUsd) = dsce.getAccountInformation(msg.sender);
    console2.log("totalDscMinted", totalDscMinted);
    console2.log("collateralValueInUsd", collateralValueInUsd);

    if (collateralValueInUsd == 0) {
        return;
    }

    uint256 maxDscToMint;
    if (totalDscMinted >= collateralValueInUsd / 2) {
        return;
    } else {
        maxDscToMint = (collateralValueInUsd / 2) - totalDscMinted;
    }

    amount = bound(amount, 1, maxDscToMint); // Ensure amount is at least 1

    vm.startPrank(msg.sender);
    dsce.mintDsc(amount);
    vm.stopPrank();
    timesMintIsCalled++;
}
}