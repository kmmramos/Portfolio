/**
 * Filename: index.js
 * Student Name: Kirstin Megga Ramos
 * Student Number: 301363582
 * Date: 2023-09-30
 */

const express = require('express');
const app = express.Router();

app.get('', (req, res) => {
    res.render('index.ejs', { currentRoute: 'index' });
})

app.get('/about', (req, res) => {
    res.render('about.ejs', { currentRoute: 'about' });
})

app.get('/services', (req, res) => {
    res.render('services.ejs', { currentRoute: 'services' });
})

app.get('/projects', (req, res) => {
    res.render('projects.ejs', { currentRoute: 'projects' });
})

app.get('/contact', (req, res) => {
    res.render('contact.ejs', { currentRoute: 'contact' });
})

app.get('/resume', (req, res) => {
    res.render('resume.ejs', { currentRoute: 'resume' });
})

module.exports = app;