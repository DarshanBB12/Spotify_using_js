# Spotify Clone Music Player

A simple Spotify-like music player built using HTML, CSS, and JavaScript. This project creates an interactive music player with a clean interface similar to Spotify.

## Features

- **Song Selection**: Click on any song in the list to select it (highlighted with green border)
- **Master Play/Pause**: Large play/pause button at the bottom controls playback
- **Navigation**: Previous and Next buttons with hover effects
- **Progress Bar**: Custom-styled progress bar with seek functionality
- **Auto-Play**: Automatically plays the next song when current song ends
- **Visual Feedback**: Playing GIF animation, icon state changes, and heart emoji indicator
- **Heart Emoji**: ❤️ when playing, 💔 when paused/stopped
- **Responsive Design**: Works on different screen sizes
- **Font Awesome Icons**: Properly implemented icons with hover effects

## File Structure

```
spotify using js/
├── index.html          # Main HTML file
├── spotifysong.html    # Alternative HTML file
├── spotifysong.css     # Stylesheet
├── spotifysong.js      # JavaScript functionality
├── logo.png            # Spotify logo
├── bg.jpg              # Background image
├── playing.gif         # Animation for playing state
├── covers/             # Song cover images
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
├── songs/              # Audio files
│   ├── 1.mp3
│   ├── 2.mp3
│   └── ...
└── README.md           # This file
```

## How to Use

1. Open `index.html` or `spotifysong.html` in a web browser
2. Click on any song in the list to **select** it (it gets highlighted with green)
3. Use the master play/pause button to start/stop playback
4. Watch the heart emoji: ❤️ when playing, 💔 when paused
5. Use previous/next buttons to navigate between songs
6. Drag the progress bar to seek within a song
7. The player automatically moves to the next song when current song ends

## Technologies Used

- **HTML5**: Structure and audio elements
- **CSS3**: Styling and responsive design
- **JavaScript**: DOM manipulation and audio controls
- **Font Awesome**: Icons for controls

## Browser Support

Works in all modern browsers that support HTML5 audio:
- Chrome
- Firefox
- Safari
- Edge

## Customization

To add more songs:
1. Add audio files to the `songs/` folder
2. Add cover images to the `covers/` folder
3. Update the `songs` array in `spotifysong.js` with new song data

Example:
```javascript
{ songName: "New Song Name", filePath: "songs/11.mp3", coverPath: "covers/11.jpg", duration: "04:15" }
```
> Responsive layout
> Clean Spotify-like user interface

~Technologies Used

>HTML5 – Structure of the web page
>CSS3 – Styling and layout design
>JavaScript – Music player functionality and DOM manipulation


~Learning Goals

This project helped me learn:
   >JavaScript DOM manipulation
   >Audio control using JavaScript
   >Building interactive web interfaces
   >Creating responsive layouts

~Live Demo
  You can view the live project here:
   https://your-username.github.io/spotify-clone/

~Author
 Darshan Dhanu



