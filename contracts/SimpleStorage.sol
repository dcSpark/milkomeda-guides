// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Storage {
    uint256 private value;
    event ValueChanged(uint256 newValue);

    constructor() {}

    function retrieve() public view returns (uint256) {
        return value;
    }

    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }

}