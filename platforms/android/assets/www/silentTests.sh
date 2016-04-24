#!/bin/bash
#cd cordova-js-unit-testing/www 
export PATH=$PATH:/usr/local/bin
karma start config.js --single-run --browsers PhantomJS
