const BASE_URL_SEARCH = "https://api.stg-bunjang.co.kr/api/1/find_v2.json";

const BASE_URL_AUTO =
	"https://api.stg-bunjang.co.kr/api/1/search/suggests_keyword.json";

export async function autoComplete(word) {
	return await (
		await fetch(`${BASE_URL_AUTO}?q=${word}&type=product&v=2`)
	).json();
}

export async function searchItem(word, order, page) {
	return await (
		await fetch(
			`${BASE_URL_SEARCH}?q=${word}&order=${order}&page=${page}&n=16&version=4`
		)
	).json();
}

export function numCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function moveTop() {
	window.scrollTo(0, 0);
}
