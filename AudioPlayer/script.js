const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ['hey', 'summer', 'ukulele'];

// keep track of song
let songIndex = 1;

// Intially load song details into DOM
loadSong(songs[songIndex]);
console.log(loadSong);

// update song details

function loadSong(song) {
  console.log(song);
  title.innerHTML = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}
