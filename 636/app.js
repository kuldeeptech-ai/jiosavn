const songsContainer =
document.getElementById("songsContainer");

const searchBtn =
document.getElementById("searchBtn");

const searchInput =
document.getElementById("searchInput");

async function performSearch(){

const query = searchInput.value.trim();

if(!query) return;

songsContainer.innerHTML = "Loading...";

try{

const songs = await searchSongs(query);

currentSongs = songs;

songsContainer.innerHTML = "";

songs.forEach((song,index)=>{

const div = document.createElement("div");

div.className = "song-card";

div.innerHTML = `

<img src="${song.image[2].url}">

<div class="song-info">

<h3>${song.name}</h3>

<p>${song.primaryArtists}</p>

</div>

`;

div.addEventListener("click",()=>{

currentIndex = index;

loadSong(song);

});

songsContainer.appendChild(div);

});

}catch(err){

songsContainer.innerHTML =
"Failed to load songs";

console.log(err);

}

}

searchBtn.addEventListener(
"click",
performSearch
);

searchInput.addEventListener(
"keypress",
(e)=>{
if(e.key==="Enter"){
performSearch();
}
}
);