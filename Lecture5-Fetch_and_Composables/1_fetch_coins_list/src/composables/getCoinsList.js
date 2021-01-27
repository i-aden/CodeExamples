import { ref } from "vue";

function getCoinsList() {
  const coingecko_base_url = "https://api.coingecko.com/api/v3";
  
  let coins_list = ref([]);
  const error = ref(null);

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

  return { coins_list, error, populateCoinsList };
}

export default getCoinsList;
