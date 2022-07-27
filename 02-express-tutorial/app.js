/* jshint esversion: 8 */
/* jshint node: true */

const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
const people = require('./routes/people');
const auth = require('./routes/auth');

// app.use([logger, authorize]);
//static assets
app.use(express.static('./methods-public'));
//parse form data
app.use(express.urlencoded({extended : false}));
//parse json
app.use(express.json());

app.use('/api/people', people);

app.use('/login', auth);

app.listen(5000, () => {
    console.log("listenining on port 5000...");
});
