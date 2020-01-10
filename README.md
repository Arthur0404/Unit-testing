# Unit-testing

  Mocha and Chai (NodeJS)
  
  1. Overview
  The purpose of this project is to learn how to use Mocha/Chai to do unit tests in NodeJS. All unit tests were done with a set of basic but useful and famous algorithms, that you can find interesting to know. The core idea with unit testing is to test a function when giving it certain set of inputs.
  
  Mocha and Chai are two JavaScript frameworks commonly used together for unit testing. Mocha is a testing framework that provides functions that are executed according in a specific order, and that logs their results to the terminal window. Chai is an assertion library that is often used alongside Mocha. It provides functions and methods that help you compare the output of a certain test with its expected value. Chai provides clean syntax that almost reads like English.
  
  2. Prerequisites
  2.1. Node
  Your Machine should have node and npm installed. Install the node.js LTS version from Node website (npm gets installed along with node automatically).
  You can use these commands to check the successful installation of node and npm.
  npm -v // will return installed npm version
  node -v // will return installed node version
  
  2.1 Mocha
  Mocha is a JavaScript Test Framework that runs on Node.js and Browser.
  Installation: (Run the below commands in terminal or cmd)
  npm install --global mocha
  npm install --save-dev mocha
  
  Note: To run Mocha, we need Node.js v4 or newer.
  —- global helps to install the Mocha on computer at global level which helps to run mocha test through command line.
  —- save-dev helps to add the mocha as dependency in package.json file for that particular project.
  
  2.2 Chai
  Chai is BDD/TDD assertion library that can be paired with any javascript testing framework.
  Assertion with Chai provides natural language assertions, expressive and readable style.
  Installation: (Run the below commands in terminal or cmd)
  npm install --save-dev chai
