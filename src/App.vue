<template>
  <div class="">
    余额: {{ account.balance }} ETH
  </div>
  <div class="">
    钱包地址: {{ account.address }}
  </div>
  <div class="flex justify-around flex-col">
    <div class="flex">
      <div class="span">钱包地址</div>
      <input type="text" v-model="address">
    </div>
    <div class="flex">
      <div class="span">私钥</div>
      <input type="text" v-model="privateKey">
    </div>
  </div>
  <button @click="getBalance">获取余额</button>
</template>

<script lang="ts" setup>
import { useAccountStore } from "@/store/account"
import {  } from "@scorum/bip39"
import { ref, watch, toValue } from "vue"
let account = useAccountStore()
let address = ref(account.address)
let privateKey = ref(account.privateKey)
watch(privateKey,()=>{
  account.privateKey = privateKey.value
})
account.getAccount()
function getBalance() {
  account.getBalance(account.address as `0x${string}`)
}
console.log(account.getAccounts())

</script>