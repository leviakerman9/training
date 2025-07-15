// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import(openzeppelin/contracts/proxy/utils/Initializable.sol);
import(openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol);
import(openzeppelin/contracts/access/OwnableUpgradeable.sol);

contract VersionV2 is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    
    uint256 public value;

    function initialize(address intialOwner) public initializer {
        __Ownable_init(intialOwner);
        __UUPSUpgradeable_init();
        value = 0;
    }

    function getvalue() public view returns(uint256) {
        return value;
    }

    function setValue(uint256 newValue) public onlyOwner {
        value = newValue;
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

    function upgrade(address newImplementation) public onlyOwner {
        upgradeToAndCall(newImplementation, "");
    }
    
}
