import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// const player = new Player('handstick', {
//     id: "vimeo-player",
//     width: 640
// });

const throttle = require('lodash.throttle');

// player.on('play', function() {
//     console.log('played the video!');
// });

let time;
const timePlay = function (data) {
    time = data.seconds;
    // console.log(time)
    localStorage.setItem('videoplayer-current-time', time);
};

player.setCurrentTime()
player.on('timeupdate', throttle(timePlay, 1000));