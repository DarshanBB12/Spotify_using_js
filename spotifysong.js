let songIndex = 0;
let songs = [
    { songName: "Warriyo - Mortals (feat. Laura Brehm) [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg", duration: "05:34" },
    { songName: "Cartoon - On & On (feat. Daniel Levi) [NCS Release]", filePath: "songs/2.mp3", coverPath: "covers/2.jpg", duration: "03:28" },
    { songName: "Janji - Heroes Tonight (feat. Johnning) [NCS Release]", filePath: "songs/3.mp3", coverPath: "covers/3.jpg", duration: "03:29" },
    { songName: "Alan Walker - Faded [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg", duration: "03:32" },
    { songName: "DEAF KEV - Invincible [NCS Release]", filePath: "songs/5.mp3", coverPath: "covers/5.jpg", duration: "04:33" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/6.mp3", coverPath: "covers/6.jpg", duration: "04:27" },
    { songName: "Elektronomia - Energy [NCS Release]", filePath: "songs/7.mp3", coverPath: "covers/7.jpg", duration: "03:14" },
    { songName: "Tobu - Hope [NCS Release]", filePath: "songs/8.mp3", coverPath: "covers/8.jpg", duration: "04:46" },
    { songName: "Itro & Tobu - Cloud 9 [NCS Release]", filePath: "songs/9.mp3", coverPath: "covers/9.jpg", duration: "04:10" },
    { songName: "Jim Yosef - Firestone [NCS Release]", filePath: "songs/10.mp3", coverPath: "covers/10.jpg", duration: "04:27" }
];

let audioElement = new Audio(songs[songIndex].filePath);
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems;

gif.style.opacity = 0; // initial opacity

// Initialize the first song name
masterSongName.innerHTML = songs[songIndex].songName;

// Error handling for audio
audioElement.addEventListener('error', (e) => {
    console.error('Audio load error:', e);
    alert('Error loading audio file. Please check the file format and path.');
});

// Dynamically build song list
const songItemContainer = document.querySelector('.songItemContainer');
songs.forEach((song, i) => {
    const item = document.createElement('div');
    item.className = 'songItem';
    item.setAttribute('data-index', i);
    item.innerHTML = `
        <img src="${song.coverPath}" alt="Cover for ${song.songName}">
        <span class="songName">${song.songName}</span>
        <span class="songlistplay">
            <span class="timestamp">${song.duration}</span>
        </span>
    `;
    songItemContainer.appendChild(item);
});

// Get song items after creation
songItems = Array.from(document.getElementsByClassName('songItem'));

// Initialize first song as active
songItems[songIndex].classList.add('active');

// Make song items clickable to select song
songItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        selectSong(index);
    });
});

// Select song function (changes current song but doesn't play)
function selectSong(index) {
    // Remove active class from all songs
    songItems.forEach(item => item.classList.remove('active'));
    
    songIndex = index;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    // Reset progress bar
    myProgressBar.value = 0;
    
    // Add active class to selected song
    songItems[index].classList.add('active');
    
    // If currently playing, pause
    if (!audioElement.paused) {
        pauseSong();
    }
}

// Master play/pause button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        playSong();
    } else {
        pauseSong();
    }
});

// Play song function
function playSong() {
    audioElement.play().catch(e => console.log('Play failed:', e));
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
}

// Pause song function
function pauseSong() {
    audioElement.pause();
    masterPlay.classList.add("fa-play");
    masterPlay.classList.remove("fa-pause");
    gif.style.opacity = 0;
}

// Progress bar update
audioElement.addEventListener("timeupdate", () => {
    const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    if (!isNaN(progress)) {
        myProgressBar.value = progress;
    }
});

// Seek functionality
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Auto-play next song when current ends
audioElement.addEventListener('ended', () => {
    nextSong();
});

// Change song function (used by next/previous buttons)
function changeSong(index) {
    // Remove active class from all songs
    songItems.forEach(item => item.classList.remove('active'));
    
    songIndex = index;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    
    // Add active class to new song
    songItems[index].classList.add('active');
    
    playSong();
}

// Next song
document.getElementById('next').addEventListener('click', () => {
    nextSong();
});

function nextSong() {
    songIndex = (songIndex >= 9) ? 0 : songIndex + 1;
    changeSong(songIndex);
}

// Previous song
document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex <= 0) ? 9 : songIndex - 1;
    changeSong(songIndex);
});