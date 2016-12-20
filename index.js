
'use strict';

let player = require('play-sound')({});
let Promise = require('bluebird');

function play() {
  return Promise.fromCallback(cb => player.play('chicken.wav', cb));
}

module.exports.play = play;
