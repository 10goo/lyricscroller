let scrolling = false;
let tempo = 200;
let menuButton = document.querySelector('#menu');
let toTopButton = document.querySelector('#to-top');
let playPauseButton = document.querySelector('#play-pause');
let slider = document.querySelector('#slider');
let sliderValue = document.querySelector('#slider-value');
let invertColorsButton = document.querySelector('#invert-colors');

invertColorsButton.addEventListener('click', () => {invertColors()});
menuButton.addEventListener('click', () => { console.log('menu') });
toTopButton.addEventListener('click', () => { scrollToTop() });
playPauseButton.addEventListener('click', () => { playPause() });
slider.addEventListener('change', ()=> {
    sliderValue.innerHTML = slider.value;
    tempo = slider.value;
});

let scroll = () => {
    window.scrollBy(0,1);
    scrollDelay = setTimeout(scroll, 310 - tempo); // 310-tempo inverts speed and delay
}
let scrollToTop = () => {
    window.scrollTo(0, 0);
}
let pauseScrolling = () => {
    clearTimeout(scrollDelay);
}
let playPause = () => {
    let result = scrolling ? pauseScrolling() : scroll();
    // Change icon
    let icon = document.querySelector('#play-pause i');
    icon.innerHTML = scrolling ? 'play_arrow' : 'pause';
    scrolling = !scrolling;
    return result;
}
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
// Start with page scrolled to the top
scrollToTop();
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
    //space
    if (e.which === 32) {
        e.preventDefault();
        playPause();
    } else if (e.which === 38) {
        e.preventDefault();
        slider.value = '300';
    } else if (e.which === 40) {
        e.preventDefault();
        slider.value = '10';
    // Prevent page down/up button events
    } else if (e.which === 33 || e.which === 34) {
        e.preventDefault();
        // slider.value += 10;
    }
});
