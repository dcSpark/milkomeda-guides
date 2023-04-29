// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IOracle {
    function readData() external view returns (uint256);
    function acceptTermsOfService() external;
}
contract PriceFeedConsumer {
    IOracle public oracle;
 
    constructor() {
        oracle = IOracle(0x49484Ae8646C12A8A68DfE2c978E9d4Fa5b01D16);
        oracle.acceptTermsOfService();
    }

    function getPrice() public view returns (uint256 data) {
        data = oracle.readData();
        // Contract logic...
    }
}
