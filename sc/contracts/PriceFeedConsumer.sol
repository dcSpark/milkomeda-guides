// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IOracle {
    function readData() external view returns (uint256);
    function acceptTermsOfService() external;
}
contract PriceFeedConsumer {
    IOracle public oracle;
 
    constructor() {
        oracle = IOracle(0x2a16a70E71D2C6f07F02b221B441a2e35E3d0848);
        oracle.acceptTermsOfService();
    }

    function getPrice() public view returns (uint256 data) {
        data = oracle.readData();
        // Contract logic...
    }
}
