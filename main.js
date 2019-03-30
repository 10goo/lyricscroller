let scrolling = false;
let tempo = 100;
let lyrics = '';
let toggleOverlayButtons = document.querySelectorAll('#menu, #close-overlay');

toggleOverlayButtons.forEach((el) => {
    el.addEventListener('click', () => { toggleOverlay() });
})

let lyricsElement = document.querySelector('.lyrics');
let songListElement = document.querySelector('#song-list');
let toTopButton = document.querySelector('#to-top');
let playPauseButton = document.querySelector('#play-pause');
let sliderElement = document.querySelector('#slider');
let sliderElementValue = document.querySelector('#slider-value');
let invertColorsButton = document.querySelector('#invert-colors');

invertColorsButton.addEventListener('click', () => {invertColors()});
toTopButton.addEventListener('click', () => { scrollToTop() });
playPauseButton.addEventListener('click', () => { playPause() });
sliderElement.addEventListener('change', ()=> {
    sliderElementValue.innerHTML = sliderElement.value;
    tempo = slider.value;
});
let toggleOverlay = () => {
    let overlay = document.querySelector('#overlay');
    overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
}
// Start scrolling
let scroll = () => {
    window.scrollBy(0,1);
    scrollDelay = setTimeout(scroll, 310 - tempo);
}
// Scroll page back to top
let scrollToTop = () => {
    window.scrollTo(0, 0);
}
// Pause scrolling
let pauseScrolling = () => {
    clearTimeout(scrollDelay);
}
// Toggle start/pause scrolling
let playPause = () => {
    let result = scrolling ? pauseScrolling() : scroll();
    // Change icon
    let icon = document.querySelector('#play-pause i');
    icon.innerHTML = scrolling ? 'play_arrow' : 'pause';
    scrolling = !scrolling;
    return result;
}
// Toggle between light and dark theme
let invertColors = () => {
    let body = document.querySelector('body');
    // rgb(51, 51, 51) equivalent to #333
    if (window.getComputedStyle(body).getPropertyValue("background-color") === 'rgb(51, 51, 51)') {
        document.documentElement.style.setProperty('--bg-color', '#white');
        document.documentElement.style.setProperty('--text-color', '#333');
        document.documentElement.style.setProperty('--opacity-main', '0.7');
        document.documentElement.style.setProperty('--opacity-hover', '1');
    } else {
        document.documentElement.style.setProperty('--bg-color', '#333');
        document.documentElement.style.setProperty('--text-color', 'white');
        document.documentElement.style.setProperty('--opacity-main', '0.2');
        document.documentElement.style.setProperty('--opacity-hover', '0.6');
    }

}
// Change the lyrics
let populateLyrics = () => {
    lyricsElement.innerText = lyrics.sub;
}
// Crate song list from json
let populateList = ()=>{
    songs.forEach((el) => {
        let listItem = document.createElement('li');
        listItem.innerText = el.artist + ' - ' + el.title;
        listItem.addEventListener('click', () => {
            lyrics = el.lyrics;
            title = el.title;
            artist = el.artist;
            slider.value = el.tempo
            sliderElementValue.innerText = el.tempo
            populateLyrics();
            toggleOverlay();
        })
        songListElement.appendChild(listItem);
    })
};

let initialize = () => {
    populateList();
    // Start with page scrolled to the top
    scrollToTop();
    // Prevent mouse wheel scrolling
    window.addEventListener('wheel', (ev) => { ev.preventDefault(); });
    // Pause after reaching bottom
    window.addEventListener('scroll', () => {
        let currentBottom = document.documentElement.scrollTop + window.innerHeight;
        let totalHeight = document.documentElement.scrollHeight;
        if (currentBottom >= totalHeight) {
            playPause();
        }
    });
    // Listen for space keypress
    window.addEventListener('keydown', (e) => {
        if (e.which === 32) { // Space pressed
            e.preventDefault();
            playPause();
        } else if (e.which === 38) { // Up arrow pressed
            e.preventDefault();
            slider.value = '300';
        } else if (e.which === 40) { // Down arrow pressed
            e.preventDefault();
            slider.value = '10';
        } else if (e.which === 33 || e.which === 34) { // Prevent page down/up button events
            e.preventDefault();
            // slider.value += 10;
        } 
    });
}

