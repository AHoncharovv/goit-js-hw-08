require('@vimeo/player');
require('lodash.throttle');

// codding

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
    
let time = 0;

player.on('play', function (timeupdate) {
    time = timeupdate.seconds;
        console.log(time);
    });

    
