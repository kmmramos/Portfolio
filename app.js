/**
 * Filename: app.js
 * Student Name: Kirstin Megga Ramos
 * Student Number: 301363582
 * Date: 2023-09-30
 */

// import
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const fs = require('fs');

// Use bodyParser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// Handle POST requests from the contact form
app.post('/submit-contact', (req, res) => {
    console.log("hello");
    const { firstName, lastName, email, subject, message, contactNo } = req.body;
  
    // Create a JavaScript object to represent the form data
    const formData = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Subject: subject,
      Message: message,
      'Contact Number': contactNo,
    };

    console.log("here: ", formData);
  
    // Convert the form data object to JSON
    const formDataJson = JSON.stringify(formData, null, 2);
  
    // Define the file path where you want to save the data
    const filePath = './public/docs/form_data.txt';
  
    // Write the JSON data to the file
    fs.writeFile(filePath, formDataJson, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error saving form data');
      } else {
        console.log('Form data saved to', filePath);
        //res.status(200).send('Form data saved successfully');
        res.redirect('/'); 
      }
    });
  });

// set views
app.set('views', './views');
app.set('view engine', 'ejs');

const appRouter = require('./routes/index');
app.use('/', appRouter);

// Listen
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});