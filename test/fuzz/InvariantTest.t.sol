//The total supply of DSC should be less than the total value of collateral
//Getter view functions should never revert


// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Test,console2} from "forge-std/Test.sol";
import {StdInvariant} from "forge-std/StdInvariant.sol";
import {DeployDSC} from "../../script/DeployDSC.s.sol";
import {DSCEngine} from "../../src/DSCEngine.sol";
import {DecentralizedStableCoin} from "../../src/DecentralizedStableCoin.sol";
import {HelperConfig} from "../../script/HeplerConfig.s.sol";
import {Handler} from "./HandlerTest.t.sol";

contract InvariantsTest is StdInvariant, Test {
    DeployDSC deployer;
    DSCEngine dsce;
    DecentralizedStableCoin dsc;
    HelperConfig config;
      address weth;
    address wbtc;
    Handler handler;
    function setUp() external {
        deployer = new DeployDSC();
        (dsce, dsc, config) = deployer.run();
        (,,weth, wbtc, ) = config.activeNetworkConfig();
        handler = new Handler(dsce, dsc);
        targetContract(address(handler));
    }
 function invariant_ProtocolTotalSupplyLessThanCollateralValue() external view returns (bool) {
    uint256 totalSupply = dsc.totalSupply();
    uint256 totalWethDeposited = IERC20(weth).balanceOf(address(dsce));
    uint256 totalWbtcDeposited = IERC20(wbtc).balanceOf(address(dsce));

    uint256 wethValue = dsce.getUsdValue(weth, totalWethDeposited);
    uint256 wbtcValue = dsce.getUsdValue(wbtc, totalWbtcDeposited);

    console2.log("totalSupply: ", totalSupply);
    console2.log("wethValue: ", wethValue);
    console2.log("wbtcValue: ", wbtcValue);
    console2.log("Times Mint Called: ", handler.timesMintIsCalled());

    assert(totalSupply <= wethValue + wbtcValue);
}
    
}