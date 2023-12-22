import React, { useState } from 'react';

const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());

const db = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'password',
database: 'example'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySql Connected...');
   });

   
 
function Home(){


    return (
        <div>
            <div>
               <h1>Recensement des habitants</h1> 
            </div>
        </div>
    );

}
export { Home }

   
