const milkomedaC1Testnet = {
    id: 200_101,
    name: 'Milkomeda C1 Testnet',
    network: 'milkomedac1test',
    iconUrl: 'https://dcspark.github.io/milkomeda-documentation/img/favicon.svg',
    iconBackground: '#000',
    nativeCurrency: {
      decimals: 18,
      name: 'milkTADA',
      symbol: 'milkTADA',
    },
    rpcUrls: {
      default: {
        http: ['https://rpc-devnet-cardano-evm.c1.milkomeda.com'],
      },
    },
    blockExplorers: {
      default: { name: 'BlockScout', url: 'https://explorer-devnet-cardano-evm.c1.milkomeda.com' },
    },
    testnet: true,
};


export { milkomedaC1Testnet }