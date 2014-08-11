#!/bin/bash
cd weather/www 
export PATH=$PATH:/usr/local/bin
karma start config.js --single-run --browsers PhantomJS
