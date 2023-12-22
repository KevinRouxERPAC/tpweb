import React from 'react';

const mysql = require('mysql');

const pool = mysql.createPool({
 host: 'localhost',
 user: 'react_user',
 password: 'password',
 database: 'react_app'
});

module.exports = pool;