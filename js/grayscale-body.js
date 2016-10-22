var GrayscaleBody = function(opt) {
  this.bodyEle;
  this.bodyClassNamePrefix = 'gsb-';
  this.switcherEle;
  this.grayscaleStateName = 'grayscale';
  this.colorStateName = 'color';
  this.localStorageStateKey = 'gsbState';
  this.prevState;
  this.currentState;
  this.option;
  this.userOption = opt;
  this.callback = {
    onSwitchersClicked: [],
  };
  this.defaultOption = {
    switcherPosition: 'top-right',
    isEnableSwitcher: true,
    isDebug: false,
  };

  /*================================================================ Util
   */
  
  this.isIe = function() {
    var myNav = navigator.userAgent.toLowerCase();

    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
  };

  /*================================================================ Local storage
   */

  this.getCurrentStateFromLocalStorage = function() {
    var state = localStorage.getItem(this.localStorageStateKey);

    if (!state) state = this.grayscaleStateName;

    return state;
  };

  this.setCurrentStateToLocalStorage = function() {
    return localStorage.setItem(this.localStorageStateKey, this.currentState);
  };

  /*================================================================ Custom event
   */

  this.on = function(eventName, callback) {
    var self = this;

    if (eventName === 'onSwitchersClicked') {
      if (typeof callback === 'function') {
        this.callback.onSwitchersClicked.push(callback);
      }
    }
  };
  
  /*================================================================ Others
   */

  this.updateBodyCurrentState = function() {
    this.bodyEle.classList.remove(this.bodyClassNamePrefix + this.prevState);
    this.bodyEle.classList.add(this.bodyClassNamePrefix + this.currentState);
  };

  this.initSwitcher = function() {
    var swticherEle = document.createElement('div'),
      swticherName = 'gsb-switcher',
      self = this;

    // setup switcher
    swticherEle.id = swticherName;
    swticherEle.className = swticherName;
    swticherEle.classList.add(this.currentState);
    swticherEle.classList.add(this.option.switcherPosition);
    swticherEle.onclick = function(event) {
      var newCurrentState = (self.currentState === self.grayscaleStateName) ?
        self.colorStateName :
        self.grayscaleStateName;

      event.preventDefault();

      // add update swticher
      this.classList.remove(self.currentState);
      this.classList.add(newCurrentState);

      // update state (global)
      self.prevState = self.currentState;
      self.currentState = newCurrentState;

      // update body
      self.updateBodyCurrentState();

      // set localStorage
      self.setCurrentStateToLocalStorage();

      if (self.option.isDebug) {
        console.log('================ gsb - switcher is clicked');
        console.log('self.prevState', self.prevState);
        console.log('self.currentState', self.currentState);
      }

      // dispatch
      var nEvents = self.callback.onSwitchersClicked.length,
        i = 0;
      
      for (i = 0; i < nEvents; i++) {
        self.callback.onSwitchersClicked[i]();
      }
    };

    // add to body
    this.bodyEle.appendChild(swticherEle);

    // init gsbSwitcherEle
    this.switcherEle = document.getElementById(swticherName);
  };

  this.init = function() {
    // set option
    this.option = Object.assign(this.defaultOption, this.userOption);
    if (this.option.isDebug) console.log('================ gsb - option', this.option);

    // start
    this.bodyEle = document.getElementsByTagName('body')[0];

    if (this.isIe() || !this.option.isEnableSwitcher) {
      this.bodyEle.className += (' ' + 'gsb-grayscale');

    } else {
      this.prevState = this.getCurrentStateFromLocalStorage();
      this.currentState = this.getCurrentStateFromLocalStorage();
      this.updateBodyCurrentState();
      this.initSwitcher();

      if (this.option.isDebug) {
        console.log('================ gsb - init');
        console.log('this.prevState: ', this.prevState);
        console.log('this.currentState: ', this.currentState);
      }
    }
  };

  // start
  this.init();

  return {
    on: this.on,
    callback: this.callback
  }
}
