'use strict';

var isLessVariable = require('../isLessVariable');
var less = require('postcss-less');
describe('isLessVariable', function () {
  it('is less variable', function () {
    expect(isLessVariable(lessAtRule('@var: 10px;'))).toBeTruthy();
  });
  it('is less variable with function', function () {
    expect(isLessVariable(lessAtRule('@hover-color: darken(@color, 10%);'))).toBeTruthy();
  });
  it('@charset is not a less variable', function () {
    expect(isLessVariable(lessAtRule('@charset UTF-8;'))).toBeFalsy();
  });
  it('@import is not a less variable', function () {
    expect(isLessVariable(lessAtRule('@import url("some-styles.css");'))).toBeFalsy();
  });
  it('@media is not a less variable', function () {
    expect(isLessVariable(lessAtRule('@media (min-width: 100px) {};'))).toBeFalsy();
  });
  it('detached ruleset is not a less variable', function () {
    expect(isLessVariable(lessAtRule('@detached-ruleset: { margin: 0 };'))).toBeFalsy();
  });
});
function lessAtRule(css) {
  var atRules = [];
  less.parse(css).walkAtRules(function (atRule) {
    return atRules.push(atRule);
  });
  return atRules[0];
}