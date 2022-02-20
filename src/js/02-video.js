const throttle = require('lodash.throttle');

require('@vimeo/player');
require('lodash.throttle');

// codding

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(data => {
    localStorage.setItem("videoplayer-current-time", data.seconds.toString());
}, 1000));


const onPlay = () => {
    localStorage.getItem("videoplayer-current-time");
};

player.on('play', onPlay);


player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
