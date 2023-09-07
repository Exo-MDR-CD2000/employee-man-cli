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
            'Quit'
        ]
    },
    {
        type: 'input',
        name: 'departmentName',
        message: 'What is the name of the department?',
    },
    {
        type: 'input',
        name: 'roleTitle',
        message: 'What is the title of the role?',
    },
    {
        type: 'number',
        name: 'roleSalary',
        message: 'What is the salary of the role?',
    },
    {
        type: 'input',
        name: 'employeeFirstName',
        message: 'What is the first name of the employee?',
    },
    {
        type: 'input',
        name: 'employeeLastName',
        message: 'What is the last name of the employee?',
    },
    {
        type: 'list',
        name: 'employeeRoleId',
        message: 'What is the role of the employee?',
        choices: [],
        when: (answers) => answers.mainMenu === 'Add an employee'
    },
    {
        type: 'list',
        name: 'employeeManagerId',
        message: 'Who is the manager of the employee?',
        choices: [],
        when: (answers) => answers.mainMenu === 'Add an employee'
    },
    {
        type: 'list',
        name: 'employeeId',
        message: 'Which employee would you like to update?',
        choices: [],
        when: (answers) => answers.mainMenu === 'Update an employee role'
    },
    {
        type: 'list',
        name: 'roleId',
        message: 'What is the new role of the employee?',
        choices: [],
        when: (answers) => answers.mainMenu === 'Update an employee role'
    }
];

module.exports = questions;