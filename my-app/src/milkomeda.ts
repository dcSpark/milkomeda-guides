const milkomedaA1Testnet = {
  id: 200_202,
  name: 'Milkomeda A1 Testnet',
  network: 'milkomedaa1test',
  iconUrl: 'https://dcspark.github.io/milkomeda-documentation/img/favicon.svg',
  iconBackground: '#000',
  nativeCurrency: {
    decimals: 18,
    name: 'milkTADA',
    symbol: 'milkTADA',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc-devnet-algorand-rollup.a1.milkomeda.com'],
    },
  },
  blockExplorers: {
    default: { name: 'BlockScout', url: 'https://testnet-algorand-rollup.a1.milkomeda.com' },
  },
  testnet: true,
};


export { milkomedaA1Testnet }