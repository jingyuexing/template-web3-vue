import { defineStore } from "pinia"
import { web3 } from "../eth"
export const useAccountStore = defineStore("account", {
    state: () => ({
        address: "0x0",
        privateKey: "0x0",
        balance:'0',
        mnemonic:[]
    }),
    actions: {
        getAccount(){
            if(this.address === "0x0"){
            }
        },
        getBalance(address:`0x${string}`){
            web3.eth.getBalance(address).then((value=>{
                this.address = address;
                this.balance = web3.utils.fromWei(value,"ether")
            }))
        },
        getAccounts(){
            return web3.eth.getAccounts().then(res=>{
                return res
            })
        }
    },
    persist: true,
})