# Guide: Quantum Random Numbers from API3

Install dependencies

```
yarn
```

Compile contract

```
npx hardhat compile
```

Add private key to `.env` file


Deploy contract on Milkomeda C1 Testnet

```
npx hardhat run scripts/deploy.js --network c1_testnet
```

Generate a sponsor wallet, derived from the deployment address of the smart contract:

```shell
npx @api3/airnode-admin derive-sponsor-wallet-address \
  --airnode-xpub xpub6CuDdF9zdWTRuGybJPuZUGnU4suZowMmgu15bjFZT2o6PUtk4Lo78KGJUGBobz3pPKRaN9sLxzj21CMe6StP3zUsd8tWEJPgZBesYBMY7Wo \
  --airnode-address 0x6238772544f029ecaBfDED4300f13A3c4FE84E1D \
  --sponsor-address <DEPLOYMENT_ADDRESS_OF_QrngExample.sol>
```

Fund the sponsor wallet on Milkomeda C1 Testnet:

```
npx hardhat fundSponsor --account <SPONSOR_WALLET_ADDRESS> --network c1_testnet
```

Set the contract parameters with settings for the **Nodary Random Numbers** provider (hardcoded in the hardhat task) and the generated sponsor wallet.

```
npx hardhat setParams --account <SPONSOR_WALLET_ADDRESS> --network c1_testnet
```

Make the request

```
npx hardhat makeRequest --network c1_testnet
```

Query the result of on latest

```
npx hardhat latestRequest --network c1_testnet
```

Check the status of a particular requestId

```
npx hardhat fulfillStatus \
  --request <REQUEST_ID>  \
  --network c1_testnet
```
