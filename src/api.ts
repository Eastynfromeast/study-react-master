/*
    fetcher fn should return promise
*/
const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins(length: number) {
	return fetch(`${BASE_URL}/coins`)
		.then(res => res.json())
		.then(json => json.slice(0, length));
}

export function fecthCoinInfo(coinId: string) {
	return fetch(`${BASE_URL}/coins/${coinId}`).then(res => res.json());
}

export function fetchCoinPriceInfo(coinId: string) {
	return fetch(`${BASE_URL}/tickers/${coinId}`).then(res => res.json());
}
