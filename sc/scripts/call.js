const hre = require("hardhat");

const getPrice = async () => {
    const address = '0xd7a246726355961197c0E32d7914aDDa3dB3f4E4'
    const feed = await hre.ethers.getContractAt("PriceFeedConsumer", address);

    const price = await feed.getPrice()
    console.log(`USD/ADA: ${hre.ethers.utils.formatEther(price)}`)
}
  
getPrice()