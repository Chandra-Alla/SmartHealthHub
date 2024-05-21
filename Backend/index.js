// backend/index.js
const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
// Sample code to connect to MySQL
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'micasas123',
  database: 'SmartHealthHub'
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
