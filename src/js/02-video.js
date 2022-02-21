import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const KEY = 'videoplayer-current-time';


const savedTime = localStorage.getItem(KEY);
if (savedTime) {
  player.setCurrentTime(savedTime);
}

const playerSavedTime = throttle(event => {
  localStorage.setItem(KEY, event.seconds);
}, 1000);
  
player.on('timeupdate', playerSavedTime);