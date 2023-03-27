# Milkomeda Open Oracle - SC Example

Install dependencies

```
yarn
```

Create a `.env` file with your private key

```
PRIVATE_KEY=<PRIVATE_KEY>"
```

Compile contract:

```
npx hardhat compile
```

Deploy Smart Contrat to C1 Testnet

```
npx hardhat run scripts/deploy.js --network c1_testnet
```

Call contract:

```
npx hardhat run scripts/call.js --network c1_testnet
```