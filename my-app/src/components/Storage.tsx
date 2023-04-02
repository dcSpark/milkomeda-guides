import { useContractRead, usePrepareContractWrite, useContractWrite } from 'wagmi'
import { useState } from "react";
import StorageInfo from '../../../artifacts/contracts/SimpleStorage.sol/Storage.json'

function Storage() {
    const CONTRACT_ADDRESS = "0x1a56Bd2F258aF7267e91184e6aeD742C340C0BC3"
    const [inputValue, setInputValue] = useState("0")

    const { config } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: StorageInfo.abi,
        args: [inputValue],
        functionName: 'store',
      })    

    const { write } = useContractWrite(config)    

    const { data } = useContractRead({
        address: CONTRACT_ADDRESS,
        abi: StorageInfo.abi,
        functionName: 'retrieve',
        watch: true
      })

  return (
    <>
    <div>Storage Value: {data?.toString()}</div>
    <input value={inputValue} 
            onChange={(event) => {
                setInputValue(event.target.value)
            }}/>
        <button disabled={!write} onClick={() => write?.()}>Store</button>    
    </>
  )
}

export default Storage