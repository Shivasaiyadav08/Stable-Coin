// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;
// ERC20Burnable includes burn functionality for our tokens which will be important when we need to take the asset out of circulation to support stability.
import {ERC20Burnable, ERC20} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
// used to contol ownership
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";


/*
 * @title: DecentralizedStableCoin
 * @author: Shiva Sai
 * Collateral: Exogenous (ETH & BTC)
 * Minting: Algorithmic
 * Relative Stability: Pegged to USD
 *
 * This is the contract meant to be governed by DSCEngine. This contract is just the ERC20 implementation of our stablecoin system.
 */


contract DecentralixedStableCoin is ERC20Burnable , Ownable{

    ////////////////////////////   ERRORS   //////////////////////////

    error DecentralizedStableCoin__MustBeMoreThanZero(); 
    error DecentralizedStableCoin__BurnAmountExceedsBalance();
    error DecentralizedStableCoin__NotZeroAddress();


    ////////////////////   constructor   /////////////////////////
     constructor() ERC20("DecentralizedStableCoin","DSC") Ownable(msg.sender) {}


    //////////////////////////   Functions   ////////////////////////

    /// burn function
     function burn(uint256 _amount) public override onlyOwner{
        uint256 balance = balanceOf(msg.sender);
        if(_amount <= 0){
            revert DecentralizedStableCoin__MustBeMoreThanZero();
        }
        if(balance < _amount){
            revert DecentralizedStableCoin__BurnAmountExceedsBalance();
        }
        // this tells to use burn function of parent class
        super.burn(_amount);
     }


     /// mint function
     function mint(address _to, uint256 _amount) external onlyOwner returns(bool){
        if(_to == address(0)){
            revert DecentralizedStableCoin__NotZeroAddress();
        }
        if(_amount <= 0){
            revert DecentralizedStableCoin__MustBeMoreThanZero();
        }
        _mint(_to, _amount);
        return true;
     }
}