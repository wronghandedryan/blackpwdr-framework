const express = require('express');
const app = express();

const { render } = require('micromustache')
console.log(render('Hello {{name}}!', { name: 'world' }))
// Hello world!
const mongoSanitize = require('express-mongo-sanitize');
 
var socket = require('socket.io-client')('http://localhost');
socket.on('connect', function(){});
socket.on('event', function(data){});
socket.on('disconnect', function(){});

const payload = {...};
 
// Remove any keys containing prohibited characters
mongoSanitize.sanitize(payload);
 
// Replace any prohibited characters in keys
mongoSanitize.sanitize(payload, {
  replaceWith: '_'
});
 
// Check if the payload has keys with prohibited characters
const hasProhibited = mongoSanitize.has(payload);
