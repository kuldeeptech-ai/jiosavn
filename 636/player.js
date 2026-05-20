const audio = document.getElementById("audio");

const playBtn = document.getElementById("playBtn");

const title = document.getElementById("title");

const artist = document.getElementById("artist");

const cover = document.getElementById("cover");

const seekBar = document.getElementById("seekBar");

let currentSongs = [];

let currentIndex = 0;

function loadSong(song){

title.innerText = song.name;

artist.innerText =
song.primaryArtists || "Unknown";

cover.src = song.image[2].url;

audio.src = song.downloadUrl[4].url;

audio.play();

playBtn.innerHTML =
'<i class="fa fa-pause"></i>';

}

playBtn.addEventListener("click",()=>{

if(audio.paused){

audio.play();

playBtn.innerHTML =
'<i class="fa fa-pause"></i>';

}else{

audio.pause();

playBtn.innerHTML =
'<i class="fa fa-play"></i>';

}

});

audio.addEventListener("timeupdate",()=>{

seekBar.value =
(audio.currentTime/audio.duration)*100;

});

seekBar.addEventListener("input",()=>{

audio.currentTime =
(seekBar.value/100)*audio.duration;

});

document
.getElementById("nextBtn")
.addEventListener("click",()=>{

currentIndex++;

if(currentIndex>=currentSongs.length){
currentIndex=0;
}

loadSong(currentSongs[currentIndex]);

});

document
.getElementById("prevBtn")
.addEventListener("click",()=>{

currentIndex--;

if(currentIndex<0){
currentIndex=currentSongs.length-1;
}

loadSong(currentSongs[currentIndex]);

});