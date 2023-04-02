import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createClient } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { milkomedaA1Testnet } from './milkomeda'

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, milkomedaA1Testnet ],  [
    publicProvider(),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'My wagmi + RainbowKit App',
  chains,
})

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

export { chains }
