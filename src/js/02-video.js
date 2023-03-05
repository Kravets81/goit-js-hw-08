import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import storage from './storage';

const refIframe = document.querySelector('iframe');
const refPlayer = new Player(refIframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const getCurrentTime = storage.load(LOCALSTORAGE_KEY) || 0.000001;
refPlayer.setCurrentTime(getCurrentTime);

refPlayer.on('timeupdate', throttle(getUpdateTime, 1000));

function getUpdateTime(currentTime) {
  storage.save(LOCALSTORAGE_KEY, currentTime.seconds);
}
