import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
function onPlay(data) { localStorage.setItem('videoplayer-current-time', data.seconds); 'videoplayer-current-time'};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))