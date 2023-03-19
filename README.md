# Tutorial: Using Wagmi/Rainbowkit with Milkomeda

## Prepare environment

Create `.env` file and complete with private key

```bash
echo "PRIVATE_KEY=<PRIVATE_KEY>" > .env
```

## Compile and deploy contracts

```bash
yarn
npx hardhat compile
npx hardhat run scripts/deploy.js --network c1_testnet
```

## Run Frontend

Download dependencies

```bash
cd my-app && yarn
```

(Edit /src/components/Storage.tsx to change hardcoded contract address)

Run

```
yarn dev
```
