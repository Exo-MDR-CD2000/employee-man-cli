# employee-man-cli
A CLI tool to manage employees

## Description
This application is a cli tool that allows a user to track employees using a database via MySQL. The tool allows for viewing of departments, roles, and employees. The tool also allows for creation of new departments, new roles, new employees, as well as editing of existing employees. Inquirer was used for the prompting of questions. All of the functionality is inside the index.js file while the db folder contains the schema and seeds files necessary for creating the database and populating it with example data. The dot env package was considered to allow for anonymous login credentials for MySQL but I decided to keep it more simple. The Express package was also considered for routing purposes but was not used. Another method for that could have been used for this application was using async/await but I did not know those concepts in time to implement them here. The only "issue" from the application is that it lists the index coluimn array for some odd reason.


## Installation
Clone the repository to your desired location. Before we can run the index.js file, we must source the schema.sql file first then the seeds.sql file located in the db folder. This will create the database and populate it with example employee data. If you so happen to already have a database entitled "employee_manager_db", the schema will drop any existing database with the same name.

## Usage
After sourcing the schema and seeds, we can begin the main application. Open the integrated terminal in VS Code in the repository location. Type 'npm start' or 'node index.js' to run the application. You will be presented a selection of choices. You can view all the departments, view all of the roles, and view all of the employees. To create a new department, select "add a department". Follow the on screen instructions and hit enter to confirm. Some of the instructions for these choies allow you to select existing data such as defining a role for a new employee and a new manager instead of inputting a new response. Once you are done viewing and updating the database, select the 'quit' option. 

## Credits
- Class notes on SQL and MySQL package

## Deployed Links

- No Deployable Link. Please refer to installation and usage.
  
- [Github Repo]()

## License
This project is licensed under [![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

## Questions
If you have any questions regarding this project, please contact me at my [email](joseguillen587@yahoo.com) or visit my GitHub page at [GitHub Profile](https://github.com/Exo-MDR-CD2000).