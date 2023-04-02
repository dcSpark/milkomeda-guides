require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    a1_testnet: {
      url: `https://rpc-devnet-algorand-rollup.a1.milkomeda.com`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }  
};