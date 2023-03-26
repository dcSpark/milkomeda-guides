const hre = require("hardhat");

async function main() {
  const Feed = await hre.ethers.getContractFactory("PriceFeedContract");
  const feed = await Feed.deploy();

  await feed.deployed();
  console.log(
    `PriceFeedContract deployed to ${feed.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
