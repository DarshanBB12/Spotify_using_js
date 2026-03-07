let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
// container where song items will appear
let songItems;
let songs =[
    { songName :"hello", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    { songName :"hell", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    { songName :"hel", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    { songName :"he", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    { songName :"h", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    { songName :"ello", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    { songName :"llo", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    { songName :"lo", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    { songName :"o", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    { songName :"hello", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"}
];

// dynamically build list based on the songs array
const songItemContainer = document.querySelector('.songItemContainer');
songs.forEach((song,i)=>{
  const item = document.createElement('div');
  item.className = 'songItem';
  item.innerHTML = `
      <img src="${song.coverPath}" alt="Cover for ${song.songName}">
      <span class="songName">${song.songName}</span>
      <span class="songlistplay"><span class="timestamp">05:34 <i id="${i}" class="far songItemPlay fa-play-circle"></i> </span></span>
  `;
  songItemContainer.appendChild(item);
});

// refresh the list reference after creation
songItems = Array.from(document.getElementsByClassName('songItem'));

 masterPlay.addEventListener('click',()=>{
   if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
   }else{
    audioElement.pause();
    masterPlay.classList.add("fa-play-circle");
    masterPlay.classList.remove("fa-pause-circle");
    gif.style.opacity=0;
   }
 })

 audioElement.addEventListener("timeupdate",()=>{
    const progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});
 myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
 })

 const makeAllPlays=()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
  })
 }
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    
    e.target.classList.remove("fa-play-circle");
     e.target.classList.add("fa-pause-circle");
     audioElement.src = `songs/${songIndex+1}.mp3`;
       masterSongName.innerHTML = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove("fa-play-circle");
     masterPlay.classList.add("fa-pause-circle");
  })
})

document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=9){
    songIndex = 0;
  }
  else{
    songIndex += 1;
  }
   audioElement.src = `songs/${songIndex+1}.mp3`;
     masterSongName.innerHTML = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove("fa-play-circle");
     masterPlay.classList.add("fa-pause-circle");
})


document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex = 0;
  }
  else{
    songIndex -= 1;
  }
   audioElement.src = `songs/${songIndex+1}.mp3`;
   masterSongName.innerHTML = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove("fa-play-circle");
     masterPlay.classList.add("fa-pause-circle");
})