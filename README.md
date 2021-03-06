# DAO [![Build Status](https://travis-ci.org/kwantu/dao.svg?branch=develop)](https://travis-ci.org/kwantu/dao)
> Javascript data access object

## Getting started
> Install all command line dependancies:  

`npm install -g bower browserify uglifyify mocha-phantomjs jsdoc-to-markdown`

### How to install the npm module:

`npm install git+https://github.com/kwantu/dao.git#0.1.0`

### How to install the bower module:

`bower install https://github.com/kwantu/dao.git#0.1.0`

### How to generate the client side dao module with browserify:

`npm run browserify`

### Dependencies:
####To use within browser based application:
  1. PouchDB Version 5.0.0 - to use with browser (COMMAND: bower install pouchdb#5.0.0 --save)

####To use in a Cordova based Android application: 
  1. Couchbase Lite plugin Version 1.2.1 - to use within Cordova application (COMMAND: cordova plugin add https://github.com/couchbaselabs/Couchbase-Lite-PhoneGap-Plugin.git@1.2.1)
  2. Add dao.jar into your CLASSPATH and its order should be first in loading jars. (See "Orders and Exports" tab in Eclipse Java Build Path)


### How to install the repo for development work:

1. First clone the repo
2. Then install node dependancies: `npm install`
3. Install bower dependancies: `bower install`
4. Build the module: `npm run build`

> NOTE: `npm run build` executes the following commands: `npm run browserify && npm run docs && npm test`

### How to run the unit tests:
> Server & client side:  
`npm test`

### How to generate the API documentation:

This is based on the 'jsdoc-to-markdown' module. See https://github.com/jsdoc2md/jsdoc-to-markdown for more information.

`npm run docs`

## API Documentation

[View the documentation here ...](https://github.com/kwantu/dao/blob/develop/docs/index.md)
