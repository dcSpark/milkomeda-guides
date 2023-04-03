const hre = require("hardhat");

const AIRNODE_RRP = "0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"

async function main() {
    const QrngExample = await hre.ethers.getContractFactory("QrngExample");
    const qrng = await QrngExample.deploy(AIRNODE_RRP);
    await qrng.deployed();
    console.log(`QrngExample contract deployed to ${qrng.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

// 0xf7f4D037C71135C49d65F5d34E42c175eDc126A9

// npx @api3/airnode-admin derive-sponsor-wallet-address \
//   --airnode-xpub xpub6CuDdF9zdWTRuGybJPuZUGnU4suZowMmgu15bjFZT2o6PUtk4Lo78KGJUGBobz3pPKRaN9sLxzj21CMe6StP3zUsd8tWEJPgZBesYBMY7Wo \
//   --airnode-address 0x6238772544f029ecaBfDED4300f13A3c4FE84E1D \
//   --sponsor-address 0xf7f4D037C71135C49d65F5d34E42c175eDc126A9

  