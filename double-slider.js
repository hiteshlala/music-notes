/*
  DoubleSlider class puts a double slider on a given element.

  slider has a min value of 0
  slider has a max value of 1000

  when enxtended customize:
  1. labelFormat - takes the current value [0...1000] and returns the formatted value to show
  2. startCB - recieves the current start value
  3. endCB - recieves the end value

  example:
  
  class Slider extends DoubleSlider {
    constructor(...args) {
      super(...args);
      this.min = 0;
      this.max = 180;
      this.range = this.max - this.min;
    }

    startCB(val) {
      const currVal = Math.round((this.range/1000) * val + this.min);
    }

    endCB(val) {
      const currVal = Math.round((this.range/1000) * val + this.min);
    }

    labelFormat(val) {
      const currVal = Math.round((this.range/1000) * val + this.min);
      return currVal;
    }
  }

  const slider = new Slider('slider-element');
  slider.init();
  
*/
class DoubleSlider {
  constructor(elementOrID, styles) {
    this.sliders = (typeof elementOrID === 'string') ? document.getElementById(elementOrID) : elementOrID;
    this.injectedStyles = styles;
    this._min = 0;
    this._max = 1000;

    // input elements
    this.right;
    this.left;

    this.start = 0;
    this.end = 1000;

    // start and end label elements
    this.startLabel;
    this.endLabel;

    // bind class methods
    this.createRandomKey = this.createRandomKey.bind(this);
    this.init = this.init.bind(this);
    this.setStyle = this.setStyle.bind(this);
    this.onLeftChange = this.onLeftChange.bind(this);
    this.onRightChange = this.onRightChange.bind(this);

    this.labelFormat = this.labelFormat.bind(this);
    this.startCB = this.startCB.bind(this);
    this.endCB = this.endCB.bind(this);
    

    this.randomuuid = this.createRandomKey();
    // this.init();
  }

  init() {
    this.setStyle();
    const wrapper = document.createElement('div');
    wrapper.classList.add(`sliders-wrapper-${this.randomuuid}`);

    const left = document.createElement('input');
    this.left = left;
    left.type = 'range';
    left.min = this._min;
    left.max = this._max;
    left.classList.add(`slider-${this.randomuuid}`);
    left.oninput = this.onLeftChange;
    left.value = this._min;

    const right = document.createElement('input');
    this.right = right;
    right.type = 'range';
    right.min = this._min;
    right.max = this._max;
    right.classList.add(`slider-${this.randomuuid}`);
    right.oninput = this.onRightChange;
    right.value = this._max;

    const labels = document.createElement('div');
    labels.classList.add(`labels-${this.randomuuid}`);

    const min = document.createElement('div');
    min.innerText = this.labelFormat(this._min);
    labels.appendChild(min);

    const start = document.createElement('div');
    start.innerText = this.labelFormat(parseInt(left.value));
    labels.appendChild(start);
    this.startLabel = start;

    const end = document.createElement('div');
    end.innerText = this.labelFormat(parseInt(right.value));
    labels.appendChild(end);
    this.endLabel = end;

    const max = document.createElement('div');
    max.innerText = this.labelFormat(this._max);
    labels.appendChild(max);

    wrapper.appendChild(left);
    wrapper.appendChild(right);
    wrapper.appendChild(labels);

    this.sliders.appendChild(wrapper);
  }

  setStyle() {
    const style = document.createElement('style');
    style.rel = "stylesheet";
    style.innerText = `
    .sliders-wrapper-${this.randomuuid} {
      max-width: inherit;
      width: 100%;
      box-sizing: border-box;
      height: calc(40px + 28px);
      background-color: rgb(239,239,239);
      border-radius: 5px;
      margin: 0px;
      padding: 0px 5px;
    }

    .slider-${this.randomuuid} {
      width: 100%;
      margin: 0px;
      padding: 0px;
    }
    .labels-${this.randomuuid} {
      display: flex;
      justify-content: space-between;
    }
    .spacer-${this.randomuuid} {
      flex-grow: 1;
    }`;
    document.getElementsByTagName('head')[0].appendChild(style);

    /*
    if ( this.injectedStyles ) {
      let resultStyles = '';
      if (this.injectedStyles.pager ) {
        resultStyles += `.pager-${this.randomuuid} ${this.injectedStyles.pager} `;
      }
      if (this.injectedStyles['pager-button'] ) {
        resultStyles += `.pager-button-${this.randomuuid} ${this.injectedStyles['pager-button']} `;
      }
      if (this.injectedStyles.clickable ) {
        resultStyles += `.clickable-${this.randomuuid} ${this.injectedStyles.clickable} `;
      }
      if (this.injectedStyles['clickable:hover'] ) {
        resultStyles += `.clickable-${this.randomuuid}:hover ${this.injectedStyles['clickable:hover']} `;
      }
      if (this.injectedStyles.selected ) {
        resultStyles += `.selected-${this.randomuuid} ${this.injectedStyles.selected} `;
      }

      const injectedStyle = document.createElement('style');
      injectedStyle.rel = 'stylesheet';
      injectedStyle.innerText = resultStyles;
      document.getElementsByTagName('head')[0].appendChild(injectedStyle);
    }
    */
  }

  onLeftChange(event) {
    event.preventDefault();
    event.stopPropagation();
    const newVal = parseInt(event.target.value);
    if ( newVal <= this.end ) {
      this.start = newVal;
    } else {
      this.start = this.end;
    }
    this.left.value = this.start;
    this.startLabel.innerText = this.labelFormat(this.start);
    this.startCB(this.start);
  }

  onRightChange(event) {
    event.preventDefault();
    event.stopPropagation();
    const newVal = parseInt(event.target.value);
    if ( newVal >= this.start ) {
      this.end = newVal;
    } else {
      this.end = this.start;
    }
    this.right.value = this.end;
    this.endLabel.innerText = this.labelFormat(this.end);
    this.endCB(this.end);
  }

  labelFormat( val ) {
    console.log('from super')
    return val;
  }

  endCB(newVal) {
    console.log(`endCB(${newVal})`);
  }

  startCB(newVal) {
    console.log(`startCB(${newVal})`);
  }

  createRandomKey(key) {
    key = key || 'xxxxxxxxxx';
    return key.replace(/[xy]/g, function (c) {
      let r = Math.random() * 16 | 0;
      let v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
