const hre = require("hardhat");

const getPrice = async () => {
    const address = '0x7839D8C1EB9d719Fcf842E968022Ca239451223c'
    const feed = await hre.ethers.getContractAt("PriceFeedContract", address);

    const price = await feed.getPrice()
    console.log(`USD/ADA: ${hre.ethers.utils.formatEther(price)}`)
}
  
getPrice()