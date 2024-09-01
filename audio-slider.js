class AudioSlider extends DoubleSlider {
  constructor(elementOrID, player, songStarts, songEnds, styles) {
    super(elementOrID, styles);

    this.player = player;

    // fractional seconds
    this.min = songStarts * 10;
    this.max = songEnds * 10;
    this.range = this.max - this.min;

    // seconds, these are curr play values
    this.startAt = songStarts;
    this.endAt = songEnds;

    this.ontimeupdate = this.ontimeupdate.bind(this);
    this.useSliders = this.useSliders.bind(this);

    this.playing = false;
    this.loop = false;
  }

  startCB(val) {
    const currVal = Math.round((this.range/1000) * val + this.min);
    this.startAt = currVal/10;
  }

  endCB(val) {
    const currVal = Math.round((this.range/1000) * val + this.min);
    this.endAt = currVal/10;
  }

  labelFormat(val) {
    const currVal = Math.round((this.range/1000) * val + this.min);
    const seconds = Math.floor(currVal / 10);
    const decisec = currVal - seconds * 10;
    return `${seconds}.${decisec}`;
  }

  useSliders() {
    if (this.playing) { // stop when button pressed again
      this.playing = false;
      this.player.pause();
      this.player.removeEventListener('timeupdate', this.ontimeupdate );
    }
    else {
      this.player.currentTime = this.startAt;
      this.playing = true;
      this.player.addEventListener( 'timeupdate', this.ontimeupdate);
      this.player.play();
    }
  }

  ontimeupdate() {
    if ( this.player.currentTime >= this.endAt ) {
      if ( this.playing && this.loop ) {
        this.player.pause();
        this.player.currentTime = this.startAt;
        this.player.play();
      }
      else if ( this.playing ) {
        this.player.pause();
        this.player.removeEventListener('timeupdate', this.ontimeupdate );
        this.playing = false;
      }
    }
  }
}
