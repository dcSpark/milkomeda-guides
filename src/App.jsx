import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [txn, setTxn] = useState(null)
  const [provider, setProvider] = useState(null)
  const [account, setAccount] = useState(null)
  const [destination, setDestination] = useState("")


  useEffect(() => {
    const windowProvider = window?.evmproviders?.flint;
    if (windowProvider?.isFlint) {
      setProvider(windowProvider)
    }
  }, [])

 const connect = async () => {
   try {
       const accounts = await provider.request({ method: "eth_requestAccounts" });
       setAccount(accounts[0])
   } catch (err) {
       console.log(err)
   }
 }

const sendTransaction = async () => {
  setTxn(null)
  console.log(destination)
  const result = await provider.request({
   method: 'eth_sendTransaction',
   params: [
       {
        from: account,
        to: destination,
        gas: '0xbd93',        
        value: '1000000000000000000',        
       },
   ],
 });
 setTxn(result)
}



  return (
    <div className="App">
      <h1>Flint Integration</h1>
      <div>
        In Flint installed: { provider ? "True" : "False" }
      </div>
      { account ? <div>Connected wallet: {account} </div> : <></> }
      <div className="card">
        { !account ? 
        <button onClick={connect}>
          Connect
        </button>
        : <button onClick={() => setAccount(null)}>
          Disconnect
        </button>
        
      }
      { account ? 
        <div className='card'>
          Send 1 mADA to the following address:

          <form className="form">
			      <input
              className="form__field"
              placeholder="Destination address" 
              value={destination}
              onChange={(val) => setDestination(val.target.value)}
              />
			      <button type="button" className="btn--inside" onClick={sendTransaction}>Send</button>
		      </form>
        </div>
        : <></>  
      }

      { txn ? 
          <div className="card logo">
            <div>
            Transaction sent...

            </div>
            <a target="_blank" href={`https://explorer-devnet-cardano-evm.c1.milkomeda.com/tx/${txn}`}>
              View in explorer
            </a>
          </div> :<></>}
      </div>
    </div>
  )
}

export default App
