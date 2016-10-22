# grayscaleBody.js
[![Bower Version](https://img.shields.io/bower/v/grayscale-body-js.svg)](https://bower.io/search/?q=grayscale-body-js) [![Npm Version](https://img.shields.io/npm/v/grayscale-body-js.svg)](https://www.npmjs.com/package/grayscale-body-js) [![Release Version](https://img.shields.io/github/release/jojoee/grayscale-body-js.svg)](https://github.com/jojoee/grayscale-body-js/releases) [![Downloads](https://img.shields.io/npm/dt/grayscale-body-js.svg)](https://github.com/jojoee/grayscale-body-js/archive/master.zip)

Automatically turn the site to grayscale (may be used for some purpose)

[![grayscaleBody.js - screenshot 1](https://raw.githubusercontent.com/jojoee/grayscale-body-js/master/screenshot/screenshot-1.gif "grayscaleBody.js - screenshot 1")](http://jojoee.github.io/grayscale-body-js/)

## Install
1: npm
```
1.1 Install npm
1.2 Install package: `npm install --save grayscale-body-js`
```
2: bower
```
2.1 Install npm
2.2 Install bower: `npm install -g bower`
2.3 Install package: `bower install --save grayscale-body-js`
```

## Getting Started for dev
1. Install [Node.js](https://nodejs.org/en/)
2. Set path (e.g. `cd C:\xampp\htdocs\jojoee.com\grayscale-body-js`)
3. Install global: `npm install -g gulp bower browser-sync`
4. Install dependencies: `bower install && npm install`
5. Start: `gulp` to build and `gulp watch` to dev

## Usage
```
// init
var option = {
  switcherPosition: 'bottom-right', // string: top-left, top-right, bottom-left, bottom-right
  isEnableSwitcher: true,           // boolean
  isDebug: true,                    // boolean
};

var gsb = new GrayscaleBody(option);

// event
gsb.on('onSwitchersClicked', function() {
  console.log('onSwitchersClicked - callback 1');
});
```

## Feature
- Grayscale / Color switcher (for non-IE)
- 4 switcher positions
- Compatible with all browsers:
  - [Google Chrome](https://www.google.com/chrome/) 19+
  - [Mozilla Firefox](https://www.mozilla.org/firefox/) 3.5+
  - [Safari](http://www.apple.com/safari/) 6+
  - [Internet Explorer](https://www.microsoft.com/en-us/download/internet-explorer.aspx) 8-9
  - [Opera](http://www.opera.com/) 11.5

## Note
- 2 spaces for indent

# TODO
- [ ] Support IE edge
- [ ] DocBlockr
- [ ] Grayscale opacity customizer
- [ ] Unit test
- [ ] Separate utilities function into another files
- [ ] Add callback event when switcher button's triggered
- [ ] Add [.npmignore](https://docs.npmjs.com/misc/developers)
- [ ] Implement [ci.testling.com](https://ci.testling.com/)
- [ ] Add E2E testing script by [Nightwatch.js](http://nightwatchjs.org/)
- [ ] Localization
- [ ] Update `demo` page

## Thank you
- [ ] [Unsplash It](https://unsplash.it/)
