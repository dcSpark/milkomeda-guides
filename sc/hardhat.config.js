require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    c1: {
      url: `https://rpc-mainnet-cardano-evm.c1.milkomeda.com`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    c1_testnet: {
      url: `https://rpc-devnet-cardano-evm.c1.milkomeda.com`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
