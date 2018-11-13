// Mongoose is open-sourced with the MIT license and is also maintained by MongoDB, Inc.
// Mongoose provides an object data modeling (ODM) environment that wraps the Node.js native driver.
// Mongoose's main value is that you can define schemas for your collections, which are then enforced at the ODM layer by Mongoose.
var mongoose = require('mongoose');

//Mongoose Schema
var LibrarySchema = new mongoose.Schema({
  title: String,
  author: String,
  numPages: Number,
  pubDate: Date,
  cover: String, //Base64 Encoded - For more info, see https://www.base64-image.de/
  synopsis: String,
  rating: Number
});

mongoose.model('Library', LibrarySchema);

module.exports = mongoose.model('Library');
