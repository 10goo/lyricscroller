let mock = [
    {
        title: `My Way`,
        author: `Frank Sinatra`,
        lyrics: `
        And now, the end is near
        And so I face the final curtain
        My friend, I'll say it clear
        I'll state my case, of which I'm certain
        I've lived a life that's full
        I've traveled each and every highway
        But more, much more than this
        I did it my way
        
        Regrets, I've had a few
        But then again, too few to mention
        I did what I had to do
        And saw it through without exemption
        I planned each charted course
        Each careful step along the byway
        And more, much more than this
        I did it my way
        
        Yes, there were times, I'm sure you knew
        When I bit off more than I could chew
        But through it all, when there was doubt
        I ate it up and spit it out
        I faced it all and I stood tall
        And did it my way
        
        I've loved, I've laughed and cried
        I've had my fill my share of losing
        And now, as tears subside
        I find it all so amusing
        To think I did all that
        And may I say - not in a shy way
        Oh no, oh no, not me
        I did it my way
        
        For what is a man, what has he got
        If not himself, then he has naught
        To say the things he truly feels
        And not the words of one who kneels
        The record shows I took the blows
        And did it my way
        Yes, it was my way`,
    },
    {
        title: `Turpentine`,
        author: `Brandi Carlile`,
        lyrics: `
        I watch you grow away from me in photographs
        And memories like spies
        And salt betrays my eyes again
        I started losing sleep and gaining weight
        And wishing I was was ten again
        So I could be your friend again
        
        These days we go to waste like wine
        That's turned to turpentine
        It's six AM and I'm all messed up
        I didn't mean to waste your time
        So I'll fall back in line
        But I'm warning you we're growing up
        
        I heard you found some pretty words to say
        You found your little game to play
        And there's no one allowed in
        Then just when we believe we could be great
        Reality it permeates
        And conquers from within again
        
        These days we go to waste like wine
        That's turned to turpentine
        It's six a.m and I'm all messed up
        I didn't mean to waste your time
        So I'll fall back in line
        But I'm warning you we're growing up
        
        We're OK I know we're OK
        
        These days we go to waste like wine
        That's turned to turpentine
        It's six AM and I'm all messed up
        I didn't mean to waste your time
        So I'll fall back in line
        But I'm warning you we're growing up
        `,
    },
    {
        title: `Smoke Gets in Your Eyes`,
        author: `The Platters`,
        lyrics: `
        They asked me how I knew
        My true love was true
        I of course replied
        Something here inside cannot be denied

        They said "someday you'll find all who love are blind"
        When your heart's on fire,
        You must realize, smoke gets in your eyes

        So I chaffed them and I gaily laughed
        To think they could doubt my love
        Yet today my love has flown away,
        I am without my love (without my love)

        Now laughing friends deride
        Tears I cannot hide
        So I smile and say
        When a lovely flame dies, smoke gets in your eyes
        Smoke gets in your eyes
        `,
    },
    {
        title: `Dakota`,
        author: `Stereophonics`,
        lyrics: `
        Thinking back, thinking of you
        Summertime think it was June
        Yeah think it was June
        Laying back, head on the grass
        chewing gum having some laughs
        Yeah having some laughs.

        You made me feel like the one
        Made me feel like the one
        The one
        You made me feel like the one
        Made me feel like the one
        The one

        Drinking back, drinking for two
        Drinking with you
        When drinking was new
        Sleeping in the back of my car
        We never went far
        Didn't need to go far

        You made me feel like the one
        Made me feel like the one
        The one
        You made me feel like the one
        Made me feel like the one
        The one

        I don't know where we are going now
        I don't know where we are going now

        Wake up call coffee and juice
        Remembering you
        What happened to you?
        I wonder if we'll meet again
        Talk about life since then
        Talk about why did it end

        You made me feel like the one
        Made me feel like the one
        The one
        You made me feel like the one
        Made me feel like the one
        The one

        I don't know where we are going now
        I don't know where we are going now

        So take a look at me now
        So take a look at me now
        So take a look at me now
        So take a look at me now
        So take a look at me now
        `,
    },
    {
        title: `It's Probably Me`,
        author: `Sting`,
        lyrics: `
        If the night turned cold and the stars looked down
        And you hug yourself on the cold cold ground
        You wake the morning in a stranger's coat
        No one would you see
        You ask yourself, who'd watch for me
        My only friend, who could it be
        It's hard to say it
        I hate to say it, but it's probably me

        When your belly's empty and the hunger's so real
        And you're too proud to beg and too dumb to steal
        You search the city for your only friend
        No one would you see
        You ask yourself, who could it be
        A solitary voice to speak out and set me free
        I hate to say it
        I hate to say it, but it's probably me

        You're not the easiest person I ever got to know
        And it's hard for us both to let our feelings show
        Some would say I should let you go your way
        You'll only make me cry
        If there's one guy, just one guy
        Who'd lay down his life for you and die
        It's hard to say it
        I hate to say it, but it's probably me

        When the world's gone crazy and it makes no sense
        There's only one voice that comes to your defense
        The jury's out and your eyes search the room
        And one friendly face is all you need to see
        If there's one guy, just one guy
        Who'd lay down his life for you and die
        It's hard to say it
        I hate to say it, but it's probably me
        I hate to say it
        I hate to say it, but it's probably me
        `,
    }

];

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
    lyricsElement.innerHTML = lyrics;
}
// Crate song list from json
let populateList = ()=>{
    mock.forEach((el) => {
        let listItem = document.createElement('li');
        listItem.innerText = el.author + ' - ' + el.title;
        listItem.addEventListener('click', () => {
            lyrics = el.lyrics;
            title = el.title;
            author = el.title;
            populateLyrics();
            toggleOverlay();
        })
        songListElement.appendChild(listItem);
        console.log('added');
    })
};
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
