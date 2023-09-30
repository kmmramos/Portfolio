// import
const express = require('express');
const app = express.Router();

app.get('', (req, res) => {
    res.render('index.ejs', {text: 'This is EJS.'});
})

app.get('/about', (req, res) => {
    res.render('about.ejs', {text: 'About Page.'});
})

app.get('/services', (req, res) => {
    res.render('services.ejs', {text: 'Services Page.'});
})

app.get('/projects', (req, res) => {
    res.render('projects.ejs', {text: 'Projects Page.'});
})

app.get('/contact', (req, res) => {
    res.render('contact.ejs', {text: 'Projects Page.'});
})

app.get('/resume', (req, res) => {
    res.render('resume.ejs', {text: 'Resume Page.'});
})

module.exports = app;