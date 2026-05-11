const links = document.querySelectorAll('.scrollbtn');
myAudio = new Audio('rainlofi2.mp3');
if (typeof myAudio.loop == 'boolean')
{
    myAudio.loop=true;
}
else
{
myAudio.addEventListener('ended', function (){
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();
}

const audio = document.getElementById('myAudio');
const slider = document.getElementById('volumeSlider');

for (const link of links) {
    link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).
    offsetTop;
    
    scroll({
        top: offsetTop,
        behavior: 'smooth'
    });
}




slider.addEventListener('input', function() {
    audio.volume = this.value;
});

