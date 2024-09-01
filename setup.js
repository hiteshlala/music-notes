const buttons = document.getElementById('buttons');
const player = document.getElementById('player');
let loop = false;
let playing = false;
let speed = 1;
let ontimeupdate;

player.addEventListener('loadeddata', onPlayerReady);
player.volume = 0.5;


function setLoop() {
  loop = !loop;
  document.getElementById('loop').checked = loop;
  console.log('loop', loop);
  if(slider) {
    slider.loop = !slider.loop;
  }
}

function selectSpeed(v) {
  speed = v;
  player.playbackRate = v;
  console.log('speed', v);
}

function onPlayerReady(event) {
  // document.getElementById('loading').classList.add('hide');
}

function stopVideo() {
  player.pause();
  playing = false;
}

function createButtonClickFunction( starting, ending ) {
  const clickfuncion = () => {
    if (playing) { // stop when button pressed again
      playing = false;
      player.pause();
      ontimeupdate && player.removeEventListener('timeupdate', ontimeupdate );
      ontimeupdate = undefined;
    }
    else {
      player.currentTime = starting;
      playing = true;
      ontimeupdate = () => {
        if ( player.currentTime >= ending ) {
          if ( playing && loop ) {
            player.pause();
            player.currentTime = starting;
            player.play();
          }
          else if ( playing ) {
            playing = false;
            player.pause();
            player.removeEventListener('timeupdate', ontimeupdate );
          }
        }
      };
      player.addEventListener( 'timeupdate', ontimeupdate);
      player.play();
    }
  };
  return clickfuncion;
}

function createButton(text, start, stop, wrapper) {
  const b = document.createElement('button');
  b.className = 'button-padding';
  b.innerHTML = `
    <div class="button-label">
      <div class="button-label-name">${text}</div>
      <div class="button-label-time">${start} - ${stop}</div>
    </div>
  `;
  b.onclick = createButtonClickFunction( start, stop );
  wrapper && wrapper.appendChild(b);
  return b;
}
