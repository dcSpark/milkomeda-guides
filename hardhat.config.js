require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const DEPLOYMENT_ADDRESS = "0x4BdD38D514600835202fE75958058DE687666855"

task("fundSponsor", "Sends 0.1 to sponsor wallet")
.addParam("account", "The sponsor account's address")
.setAction(async (taskArgs) => {
  console.log(`Funding sponsor wallet: ${taskArgs.account}`)
  const [owner] = await ethers.getSigners();
  const tx = await owner.sendTransaction({
      to: taskArgs.account,
      value: ethers.utils.parseEther("0.1"), 
    });
  tx.wait()
  const balance = await hre.ethers.provider.getBalance(taskArgs.account);
  console.log("Balance:", ethers.utils.formatEther(balance))
});

task("setParams", "Sets the parameters for testnets")
.addParam("account", "The sponsor account's address")
.setAction(async (taskArgs) => {

  const AIRNODE = "0x6238772544f029ecaBfDED4300f13A3c4FE84E1D"
  const ENDPOINT_ID = "0xfb6d017bb87991b7495f563db3c8cf59ff87b09781947bb1e417006ad7f55a78"
  
  const qrng = await hre.ethers.getContractAt("QrngExample", DEPLOYMENT_ADDRESS);
  const res = await qrng.setRequestParameters(AIRNODE, ENDPOINT_ID, taskArgs.account);
  console.log("Trx hash:", res.hash);
});


task("makeRequest", "Request a random number")
.setAction(async () => {
  const qrng = await hre.ethers.getContractAt("QrngExample", DEPLOYMENT_ADDRESS);
  const tx = await qrng.makeRequestUint256();
  tx.wait()
});


task("latestRequest", "Get latest Request")
.setAction(async () => {
  const qrng = await hre.ethers.getContractAt("QrngExample", DEPLOYMENT_ADDRESS);
  const latestRequest = await qrng.latestRequest()
  console.log("Latest Request:", latestRequest);
});


task("fulfillStatus", "Check request status")
.addParam("request", "ID of the request")
.setAction(async (taskArgs) => {  
  const qrng = await hre.ethers.getContractAt("QrngExample", process.env.DEPLOYMENT_ADDRESS);
  const status = await qrng.waitingFulfillment(taskArgs.request)
  console.log("Waiting for fulfillment:", status);
});


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    c1_testnet: {
      url: `https://rpc-devnet-cardano-evm.c1.milkomeda.com`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }  
};