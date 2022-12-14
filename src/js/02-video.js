import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.getElementById("vimeo-player");
const player = new Player(iframe);

player.on("timeupdate", throttle(onPlay, 1000));

function onPlay(data) {
  console.log("played the video!");
  console.log(data);
  const time = data.seconds;

  localStorage.setItem("videoplayer-current-time", time);
}

const resultLocalStorage = localStorage.getItem("videoplayer-current-time");
if (resultLocalStorage) {
  player.setCurrentTime(resultLocalStorage);
}
