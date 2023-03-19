import { useContractRead, usePrepareContractWrite, useContractWrite } from 'wagmi'
import { useState } from "react";
import StorageInfo from '../../../artifacts/contracts/SimpleStorage.sol/Storage.json'

function Storage() {
    const CONTRACT_ADDRESS = "0x5d85a5D5F759F3Cb0A7B78d2381D789929e92FF3"
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