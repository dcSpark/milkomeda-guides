const hre = require("hardhat");

const SPONSOR_WALLET = "0xb0d9B3ed9F112A5944468756E76bf9A29CB45964"

async function main() {
    console.log("Funding wallet...")
    const [owner] = await ethers.getSigners();
    const tx = await owner.sendTransaction({
        to: SPONSOR_WALLET,
        value: ethers.utils.parseEther("0.1"), 
      });
    tx.wait()
    const balance = await hre.ethers.provider.getBalance(SPONSOR_WALLET);
    console.log(ethers.utils.formatEther(balance))
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
