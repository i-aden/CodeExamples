<template>
  <h1>List of Cryptoassets from CoinGecko</h1>
  <div v-if="error">{{ error }}</div>
  <el-row v-if="coins_list.length">
    <el-col
      :span="8"
      v-for="coin in coins_list"
      :key="coin.id"
      :offset="index > 0 ? 2 : 0"
    >
      <el-card :body-style="{ padding: '0px' }">
        <template #header>
          <div class="header">
            <span>{{ coin.name }}</span>
          </div>
        </template>
        <div style="padding: 14px;" class="bottom">
          <!-- <span>Symbol: {{ coin.id }}</span> -->
          <span>Symbol: {{ coin.symbol }}</span>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <div v-else>Loading cryptoassets list ...</div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",

  setup() {
    let coins_list = ref([]);
    const error = ref(null);

    const coingecko_base_url = "https://api.coingecko.com/api/v3";

    async function populateCoinsList() {
      const coins_list_url = coingecko_base_url + "/coins/list";

      try {
        let coins_data = await fetch(coins_list_url);
        if (!coins_data.ok) {
          throw Error("Unable to get list of coins from Coin Gecko");
        }

        coins_list.value = await coins_data.json();
      } catch (coins_list_error) {
        error.value = coins_list_error.message;
        console.log(error.value);
      }
    }

    populateCoinsList();

    return { coins_list, error, populateCoinsList };
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
