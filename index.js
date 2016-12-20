
'use strict';

let path = require('path');
let player = require('play-sound')({});
let Promise = require('bluebird');

function play() {
  let filePath = path.join(__dirname, 'chicken.wav');
  return Promise.fromCallback(cb => player.play(filePath, cb));
}

module.exports.play = play;
