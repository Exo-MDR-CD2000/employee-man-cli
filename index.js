// establishes the code to prompt the user for input
// use inquirer to prompt the user for input
// import the connection from db/connection.js so that mysql can be used

const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
const connection = require('./config/connection.js');
const questions = require('./config/questions.js');


// I need to write fx that will display all of the options for the user to choose from



async function mainMenu() {
    let shouldQuit = false;

    while (!shouldQuit) {
        const { option } = await inquirer.prompt(questions.mainMenu);

        switch (option) {
            case 'View all departments':
                await viewAllDepartments();
                break;
            case 'View all roles':
                await viewAllRoles();
                break;
            case 'View all employees':
                await viewAllEmployees();
                break;
            case 'Add a department':
                await addDepartment();
                break;
            case 'Add a role':
                await addRole();
                break;
            case 'Add an employee':
                await addEmployee();
                break;
            case 'Update an employee role':
                await updateEmployeeRole();
                break;
            case 'Quit':
                shouldQuit = true;
                break;
                default:
                    console.log('An unknown error occurred');
                    process.exit(1);

        }
    }
    await connection.end();
}


async function viewAllDepartments() {
    const [rows] = await connection.query('SELECT * FROM department');
    console.table(rows);
}

async function viewAllRoles() {
    const [rows] = await connection.query('SELECT * FROM role');
    console.table(rows);
}

async function viewAllEmployees() {
    const [rows] = await connection.query('SELECT * FROM employee');
    console.table(rows);
}

async function addDepartment() {
    const { departmentName } = await inquirer.prompt(questions.addDepartment);
    await connection.query('INSERT INTO department (name) VALUES (?)', [departmentName]);
    console.log('Department added successfully!');
}

async function addRole() {
    const { roleTitle, roleSalary, roleDepartmentId } = await inquirer.prompt(questions.addRole);
    await connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [roleTitle, roleSalary, roleDepartmentId]);
    console.log('Role added successfully!');
}

async function addEmployee() {
    const { employeeFirstName, employeeLastName, employeeRoleId, employeeManagerId } = await inquirer.prompt(questions.addEmployee);
    await connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [employeeFirstName, employeeLastName, employeeRoleId, employeeManagerId]);
}

async function updateEmployeeRole() {
    const { employeeId, roleId } = await inquirer.prompt(questions.updateEmployeeRole);
    await connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]);
    console.log('Employee role updated successfully!');
}

mainMenu();


// This is a lot of similar code for each function. Test the code and make sure that the questions.js file is working properly
