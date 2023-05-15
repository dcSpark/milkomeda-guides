const hre = require("hardhat");

const getPrice = async () => {
    const address = '0xD5d35dC8f4e942Ec2B43290c6C2EDA4bab2d2c05'
    const feed = await hre.ethers.getContractAt("PriceFeedConsumer", address);

    const price = await feed.getPrice()
    console.log(`USD/ADA: ${hre.ethers.utils.formatEther(price)}`)
}
  
getPrice()