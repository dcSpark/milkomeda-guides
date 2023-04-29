const hre = require("hardhat");

async function main() {
  const Feed = await hre.ethers.getContractFactory("PriceFeedConsumer");
  const feed = await Feed.deploy();

  await feed.deployed();
  console.log(
    `PriceFeedConsumer deployed to ${feed.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
