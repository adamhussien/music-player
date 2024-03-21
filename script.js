
'use strict'
const tracks = [
    {
        artist: "SZA",
        track: "/01. Kill Bill - (SongsLover.com).mp3",
        title: "Kill Bill",
        cover: "/SZA_-_Kill_Bill.png"
    },
    {
        artist: "Harry Styles",
        track: "/Harry Styles - As It Was - (SongsLover.com).mp3",
        title: "As It Was",
        cover: "/was.jpg"
    },

];

// Get DOM elements
const artwork = document.querySelector(".cover");
const artistElem = document.querySelector(".artist");
const titleElem = document.querySelector(".title");
const currentTimeElem = document.querySelector(".currenttime");
const durationElem = document.querySelector(".duration");
const range = document.querySelector(".range");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const pause = document.querySelector(".pause");
 const audio = new Audio();

let currentTrackIndex = 0;

// Function to load a track
function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.track;
    artwork.src = track.cover;
    artistElem.textContent = track.artist;
    titleElem.textContent = track.title;
    range.value = 0;
}

loadTrack(currentTrackIndex);

function togglePlay() {
    if (audio.paused) {
        audio.play();
        pause.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        audio.pause();
        pause.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}


audio.addEventListener("timeupdate", function() {
    currentTimeElem.textContent = formatTime(audio.currentTime);
    durationElem.textContent = formatTime(audio.duration);
    range.value = (audio.currentTime / audio.duration) * 100;
});
range.addEventListener("input", function(){
    audio.currentTime = (range.value / 100) * audio.duration
})
next.addEventListener('click', function(){
currentTrackIndex = (currentTrackIndex  + 1 ) % tracks.length;
loadTrack(currentTrackIndex)
audio.play()
});
prev.addEventListener("click", function(){
    audio.currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length
    loadTrack(currentTrackIndex)
    audio.play()
})

pause.addEventListener('click',togglePlay)


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
} 
 





















