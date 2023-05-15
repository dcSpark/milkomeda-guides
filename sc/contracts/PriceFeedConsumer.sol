// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IOracle {
    function readData() external view returns (uint256);
    function acceptTermsOfService() external;
}
contract PriceFeedConsumer {
    IOracle public oracle;
 
    constructor() {
        oracle = IOracle(0x47a7d67e89E5714456b9af39703C1dc62203002A);
        oracle.acceptTermsOfService();
    }

    function getPrice() public view returns (uint256 data) {
        data = oracle.readData();
        // Contract logic...
    }
}
