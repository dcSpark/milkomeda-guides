const hre = require("hardhat");

const getPrice = async () => {
    const address = '0x707C685c53C44B99a71107Aeb6289B6eb9AA4597'
    const feed = await hre.ethers.getContractAt("PriceFeedConsumer", address);

    const price = await feed.getPrice()
    console.log(`ADA/USD: ${hre.ethers.utils.formatEther(price)}`)
}
  
getPrice()