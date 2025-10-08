// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {ERC20Mock} from "openzeppelin-contracts/contracts/mocks/token/ERC20Mock.sol";
import { DeployDSC } from "../script/DeployDSC.s.sol";
import { DSCEngine } from "../src/DSCEngine.sol";
import { DecentralizedStableCoin } from "../src/DecentralizedStableCoin.sol";
import { Test, console } from "forge-std/Test.sol";
import { HelperConfig } from "../script/HeplerConfig.s.sol";


contract DSCEngineTest is Test {

    DeployDSC deployer;
    DecentralizedStableCoin dsc;
    DSCEngine dsce;
    HelperConfig config;
    address weth;
    address ethUsdPriceFeed;
    address wbtc;
    address btcUsdPriceFeed;

    address[] public tokenAddresses;
    address[] public feedAddresses;

    address public USER = makeAddr("user");
    uint256 public constant AMOUNT_COLLATERAL = 10 ether;
    uint256 public constant STARTING_ERC20_BALANCE = 10 ether;


    function setUp() public {
        deployer = new DeployDSC();
        (dsce ,dsc ,config) = deployer.run();
        (ethUsdPriceFeed, btcUsdPriceFeed, weth, wbtc, ) = config.activeNetworkConfig();
        ERC20Mock(weth).mint(USER, STARTING_ERC20_BALANCE);
    }


    modifier depositedCollateral() {
vm.startPrank(USER);
ERC20Mock(weth).approve(address(dsce), AMOUNT_COLLATERAL);
dsce.depositCollateral(weth, AMOUNT_COLLATERAL);
vm.stopPrank();
_;
}

/////////////////
// Price Tests //
/////////////////​
function testGetUsdValue() public {
//    15e18 * 2,000/ETH = 30,000e18
    uint256 ethAmount = 15e18;
    uint256 expectedUsd = 30000e18;
    uint256 actualUsd = dsce.getUsdValue(weth, ethAmount);
    assertEq(expectedUsd, actualUsd);
}

    /////////////////////////////
    // depositCollateral Tests //
    /////////////////////////////​
    function testRevertsIfCollateralZero() public {
    vm.startPrank(USER);
    ERC20Mock(weth).approve(address(dsce), AMOUNT_COLLATERAL);

    vm.expectRevert(DSCEngine.DSCEngine__NeedsMoreThanZero.selector);
    dsce.depositCollateral(weth, 0);
    vm.stopPrank();
    }



    /////////////////////////////
    //      constructor        //
    /////////////////////////////​

    function testRevertsIfTokenLengthDoesntMatchPriceFeeds() public {
       
        tokenAddresses.push(weth);
    
        feedAddresses.push(ethUsdPriceFeed);
        feedAddresses.push(btcUsdPriceFeed);
        vm.expectRevert(DSCEngine.DSCEngine__TokenAddressesAndPriceFeedAddressesMustBeSameLength.selector);
        new DSCEngine(tokenAddresses, feedAddresses, address(dsc));
    }

    function testGetTokenAmountFromUsd() public depositedCollateral {
    uint256 usdAmount = 100 ether;
    uint256 expectedWeth = 0.05 ether;
    uint256 actualWeth = dsce.getTokenAmountFromUsd(weth, usdAmount);
    assertEq(expectedWeth, actualWeth);
    }
}
