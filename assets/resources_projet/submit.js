const express = require('express');
const bodyParser = require('body-parser');
const pool = require('../db');

const app = express();
app.use(bodyParser.json());

app.post('/submitForm', (req, res) => {
 const data = req.body;

 pool.query('INSERT INTO form_data SET ?', data, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Server error');
    } else {
      res.status(200).send('Form submitted successfully');
    }
 });
});

module.exports = app;