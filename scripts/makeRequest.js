const hre = require("hardhat");
require("dotenv").config();

const AIRNODE = "0x6238772544f029ecaBfDED4300f13A3c4FE84E1D"
const ENDPOINT_ID = "0xfb6d017bb87991b7495f563db3c8cf59ff87b09781947bb1e417006ad7f55a78"
const SPONSOR_WALLET = "0xb0d9B3ed9F112A5944468756E76bf9A29CB45964"



async function main() {

    const qrng = await hre.ethers.getContractAt("QrngExample", process.env.DEPLOYMENT_ADDRESS);
    const res = await qrng.setRequestParameters(AIRNODE, ENDPOINT_ID, SPONSOR_WALLET);
    console.log("Trx hash:", res.hash);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });