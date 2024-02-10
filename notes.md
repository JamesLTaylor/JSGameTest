## Setting up environment

To develop and run locally you need to have a webserver running. This is so that the 
phaser code is able to request image files using http rather than directly accessing the local file
system.

One way is:

*Install*
 * install node.js:  https://nodejs.org/en/download/ (this is useful for installing required packages too)
 * install a simple http server with `npm install --global http-server`

*Run* 
 * `http-server`
