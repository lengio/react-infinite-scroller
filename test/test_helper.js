/*eslint-disable*/
require('babel-register')();
var chai = require('chai');
var JSDOM = require('jsdom').JSDOM;
var exposedProperties = ['window', 'navigator', 'document'];

global.dom = new JSDOM('<body></body>');
global.window = dom.window.document.defaultView;

Object.keys(dom.window.document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = dom.window.document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

global.IS_REACT_ACT_ENVIRONMENT = true;
