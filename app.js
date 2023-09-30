/**
 * Filename: app.js
 * Student Name: Kirstin Megga Ramos
 * Student Number: 301363582
 * Date: 2023-09-30
 */

// import
const express = require('express');
const app = express();
const port = 5000;

// static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// set views
app.set('views', './views');
app.set('view engine', 'ejs');

const appRouter = require('./routes/index');
app.use('/', appRouter);

// Listen
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});