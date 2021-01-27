import { ref } from "vue";

function getCoinData() {
  let coinData = ref([]);
  const error = ref(null);

  async function fetchCoinData(coinURL) {
    try {
      let data = await fetch(coinURL);
      if (!data.ok) {
        throw Error("Unable to get coin data from Coin Gecko");
      }

      let jsonCoinData = await data.json();
      coinData.value.push({
        name: jsonCoinData.name,
        price: jsonCoinData.market_data.current_price.gbp,
        marketCap: jsonCoinData.market_data.market_cap.gbp,
        totalVolume: jsonCoinData.market_data.total_volume.gbp,
        homepage: jsonCoinData.links.homepage[0],
      });
    } 
    catch (coinDataError) {
      error.value = coinDataError.message;
      console.log(error.value);
    }
  }

  return { coinData, error, fetchCoinData };
}

export default getCoinData;
