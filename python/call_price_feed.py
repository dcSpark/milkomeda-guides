import requests
from dotenv import dotenv_values
from eth_account import Account
from web3 import Web3

config = dotenv_values(".env") 

signer = Account.from_key(config['PRIVATE_KEY'])

rpc_url = "https://rpc-devnet-cardano-evm.c1.milkomeda.com"

web3 = Web3(Web3.HTTPProvider(rpc_url))
print("Connected to Milkomeda C1 Testnet:", web3.is_connected())


oracle_address = "0x47a7d67e89E5714456b9af39703C1dc62203002A" # Testnet

res = requests.get("https://raw.githubusercontent.com/DjedAlliance/Oracle-Solidity/main/abi/Aggr3Oracle.json")
abi = res.json().get('abi')


oracle = web3.eth.contract(address=oracle_address, abi=abi)

def sign_and_send(txn, account):
    signed_txn = web3.eth.account.sign_transaction(txn, private_key=account._private_key)
    tx_hash = web3.eth.send_raw_transaction(signed_txn.rawTransaction)
    receipt = web3.eth.wait_for_transaction_receipt(tx_hash)
    return receipt


print("Description:", oracle.functions.description().call())

has_accepted = oracle.functions.acceptedTermsOfService(signer.address).call()
if not has_accepted:
    print("Accepting ToS...")
    txn = oracle.functions.acceptTermsOfService().build_transaction({
            'gas': 700000,
            'gasPrice': Web3.to_wei('500', 'gwei'),
            'nonce': web3.eth.get_transaction_count(signer.address),
        })
    res = sign_and_send(txn, signer)

txn = oracle.functions.readData().call({'from': signer.address})
print("Price:", txn / 1e18)
