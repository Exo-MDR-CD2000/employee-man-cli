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
    database: 'employee_manager_db'
});


connection.connect((err) => {
    if (err) throw err
    console.log('connected to MySQL server!')
    showPrompt();
});


// inquirer prompts

const showPrompt = () => {
    inquirer.prompt([
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
        }
    ]).then((answer) => {
        switch (answer.mainMenu) {
            case 'View all departments':
                viewAllDepartments();
                break;
            case 'View all roles':
                viewAllRoles();
                break;
            case 'View all employees':
                viewAllEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployeeRole();
                break;
            case 'Quit':
                connection.end();
                break;
            default:
                console.log('An unknown error occurred');
                process.exit(1);
        }
    })
}


// now create the functions for each of the switch cases

const viewAllDepartments = () => {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res);
        showPrompt();
    })
}

const viewAllRoles = () => {
    connection.query('SELECT * FROM role', (err, res) => {
        if (err) throw err;
        console.table(res);
        showPrompt();
    })
}

const viewAllEmployees = () => {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.table(res);
        showPrompt();
    })
}

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the department?',
        }
    ]).then((answer) => {
        connection.query('INSERT INTO department SET ?', answer, (err) => {
            if (err) throw err;
            console.log('Department added successfully!');
            showPrompt();
        })
    })
}

const addRole = () => {
    inquirer.prompt([
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
            type: 'number',
            name: 'departmentId',
            message: 'What is the department id of the role?',
        }
    ]).then((answer) => {
        connection.query('INSERT INTO role SET ?', answer, (err) => {
            if (err) throw err;
            console.log('Role added successfully!');
            showPrompt();
        })
    })
}