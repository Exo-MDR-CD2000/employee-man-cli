// this should connect to the mysql database

const mysql = require('mysql2'); // mysql2 is a promise based mysql library
const dotenv = require('dotenv'); // dotenv is used to store sensitive data in a .env file. Taken from current ORM lessons

dotenv.config(); // loads the .env file

const connection = mysql.createConnection({
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    port: 3306,
    host: 'localhost'
}); // creates the connection to the database



connection.connect((err) => {
    if (err) throw err;
    console.log('connected to MySQL server!')
}); // console logs if the connection is successful



module.exports = connection; // exports the connection to be used in other files


// make sure to remember that the name, passsword, and user must be inside a .env file in the root directory of the project
// explain this in the readme when submitting the project