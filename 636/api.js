const API_BASE = "https://saavn.dev/api";

async function searchSongs(query){

const res = await fetch(
`${API_BASE}/search/songs?query=${encodeURIComponent(query)}`
);

const data = await res.json();

return data.data.results;

}