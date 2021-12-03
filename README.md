Starting a new repo:

git clone git@github.com:jesserosshutt/repo-name.git

git init -b main

create a readme.md for front page

git add .; git commit -m 'measage'; git push origin main


Initialise node package manager:

npm init


Initialise ExpressJs:

npm i express


File set up:

touch index.js; touch server.js


Set up web server:

In server.js bring in express library with: const express = require('express')

Call this function to create server with: const server = express()

Export the server function with: module.exports = server

Then will need to bring it into the index.js file with: const server = require('./server')

Set port id to listen on with: const PORT = 3000

Set up listening with: server.listen(PORT, () => {console.log('The server is listening')})


Run server:

Run server from comandline with: node index.js
