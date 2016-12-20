#!/usr/bin/env node

'use strict';

let chicken = require('../');

chicken.play()
  .then(() => {console.log('CHICKEN!');})
  .catch((err) => {throw err;});
