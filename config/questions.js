//  main code to prompt the user for input using inquirer
const inquirer = require('inquirer');


const questions = [
    {
        type: 'list',
        name: 'mainMenu',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
        ]
    },
    {
        type: 'input',
        name: 'departmentName',
        message: 'What is the name of the department?'
        
    }
];

module.exports = questions;