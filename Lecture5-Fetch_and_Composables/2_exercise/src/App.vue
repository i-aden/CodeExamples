<template>
  <h1>List of Cryptoassets from CoinGecko</h1>
  <div v-if="error">{{ error }}</div>
  <el-table :data="coinData" border style="width: 100%">
    <el-table-column prop="name" label="Cryptoasset" width="180">
    </el-table-column>
    <el-table-column prop="price" label="Price (£)" width="180">
    </el-table-column>
    <el-table-column prop="marketCap" label="Market Cap (£)" width="180">
    </el-table-column>
    <el-table-column prop="totalVolume" label="Total volume (£)" width="180">
    </el-table-column>
    <el-table-column prop="homepage" label="Homepage">
    </el-table-column>
  </el-table>
</template>

<script>
import { ref } from "vue";
import getCoinData from "./composables/getCoinData";

export default {
  name: "App",

  setup() {
    const coins = ref(["bitcoin", "cardano", "dash", "ethereum", "zcash"]);
    
    const coingecko_base_url = "https://api.coingecko.com/api/v3";

    const { coinData, error, fetchCoinData } = getCoinData();

    for (let coin of coins.value) {
      let coinURL = coingecko_base_url + "/coins/" + coin;

      fetchCoinData(coinURL);
    }

    //console.log(coinData.value);

    return { coinData, error };
  },
};
</script>

<style>
.header {
  padding: 0px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
  text-align: center;
}
</style>
