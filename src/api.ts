/*
    fetcher fn should return promise
*/

const URL_COINS = "https://api.coinpaprika.com/v1/coins";
export function fetchCoins() {
	return fetch(URL_COINS).then(res => res.json());
}
