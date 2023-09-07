// second test file to have everything in one place. I will combine all the functions into here instead of modularizing them

const inquirer = require('inquirer');
const mysql = require('mysql2');

// i'm pretty sure express is not needed for this type of project.
// I can also hardcode in the port, host, user, and password without using dotenv

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12347$$jag',
    database: 'employee_db'
});


connection.connect((err) => {
    if (err) throw err
    console.log('connected to MySQL server!')
    showPrompt();
});