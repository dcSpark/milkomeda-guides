const ethers = require("ethers");
require("dotenv").config();
const abi = require('./Oracle.json').abi

const rpcURL = "https://rpc-devnet-cardano-evm.c1.milkomeda.com"
const provider = new ethers.JsonRpcProvider(rpcURL)
const signer = new ethers.Wallet( `0x${process.env.PRIVATE_KEY}`, provider )
const oracle = new ethers.Contract("0x47a7d67e89E5714456b9af39703C1dc62203002A", abi, signer)


// oracle.acceptedTermsOfService(signer.address)
// .then(resp => console.log("Accepted Terms of Service:", resp))

oracle.description()
.then(resp => console.log("Description:", resp))


const getPriceFeed = async () => {
    const accepted = await oracle.acceptedTermsOfService(signer.address)
    if (!accepted) {
        console.log("Accepting ToS...")
        const tx = await oracle.acceptTermsOfService();
        await tx.wait();    
    }
    const price = await oracle.readData()
    console.log("Price:", ethers.formatEther(price))
}

getPriceFeed()






