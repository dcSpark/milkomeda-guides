import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

import { Account } from './components'
import Storage from './components/Storage'

export function App() {
  const { isConnected } = useAccount()
  return (
    <>
      <h1>Milkomeda dApp</h1>

      <ConnectButton />
      <Storage />
    </>
  )
}
