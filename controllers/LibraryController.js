const express = require('express');
const bodyParser = require('body-parser');

// This is your Library model,aka the schema definition for your library document.  This is a Mongoose model.  For more information, see https://mongoosejs.com/docs/models.html. 
const Library = require('../models/Library');

// Use the express.Router class to create modular, mountable route handlers.  For more info, see https://expressjs.com/en/guide/routing.html.  
// A Router instance is a complete middleware and routing system.
const router = express.Router();

// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body
// The middleware was a part of Express.js earlier, but now you have to install it separately.  For more info, see https://github.com/expressjs/body-parser.
// This body-parser module, parses the JSON, buffer, string and URL-encoded data submitted using an HTTP POST request.  For more info, see https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express.
// limit
// Controls the maximum request body size. If this is a number, then the value specifies the number of bytes; if it is a string, the value is passed to the bytes library for parsing. Defaults to '100kb'.
router.use(bodyParser.urlencoded({ extended: true, limit: '5mb'}));

// CREATES A NEW BOOK IN YOUR LIBRARY DB
// This POST route for your library creates a new entry in your database.
router.post('/', function (req, res) {

  // Uses the Mongoose create method on your model.
  Library.create({
      title : req.body.title,
      author : req.body.author,
      pubDate : Date.now(),
      numPages : req.body.numPages,
      cover : req.body.cover
    },
    (err, book) => {
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      res.status(200).send(book);
    });
});

// Step 1. Create a GET route that RETURNS ALL THE BOOKS IN YOUR DATABASE here.  
// Step 2. Using skip add a page number and use limit for number of results.  You will also have to add the front-end functionality 
// into the DataTableUI of your library platform.

// Create a GET route that GETS A SPECIFIC SINGLE BOOK FROM YOUR DATABASE here.

// Create a DELETE route DELETES A SPECIFIC SINGLE BOOK FROM YOUR DATABASE here.

// Create a PUT route that UPDATES A SPECIFIC SINGLE BOOK IN THE DATABASE here.

module.exports = router;
