// establishes the code to prompt the user for input
// use inquirer to prompt the user for input
// import the connection from db/connection.js so that mysql can be used

const inquirer = require('inquirer');
const connection = require('./connection.js');
const questions = require('./questions.js');


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



