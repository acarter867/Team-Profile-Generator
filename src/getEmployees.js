const inquirer = require('inquirer');
const { createManagerCard, createEngineerCards, createInternCards } = require('./createCards');
const htmlHelper = require('./generateHTML');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const fs = require('fs');

//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
employees = [];

//Prompt user for information about manager, then prompt for more employees to start the loop
function newManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'Enter Manager Name: '
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'Enter Manager Id: '
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Enter Manager Email: '
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'Enter Manager Office Number: '
            }
        ])
        .then(data => {
            createManager(data);
            addEmployee();
        });
}

//prompt user for data based on chosen employee type, and call function to add that employee to employee array
function newEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'Enter Engineer Name: '
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'Enter Engineer Id: '
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Enter Engineer Email: '
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'Enter Engineer gitHub Username: '
            }
        ])
        .then(data => {
            createEngineer(data);
        });
}

function newIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'Enter Intern Name: '
            },
            {
                type: 'input',
                name: 'internId',
                message: 'Enter Intern Id: '
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Enter Intern Email: '
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'Enter Intern School: '
            }
        ])
        .then(data => {
            createIntern(data);
        });
}

//prompt user to either add another employee, or generate roster page.
function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'addAnother',
                message: 'would you like to add another employee?',
                choices: ['Yes', 'no']
            }
        ])
        .then(data => {
            if (data.addAnother === 'Yes') {
                createEmployees();
            }
            else {
                //If no additional employees are required, sort employees by role into corresponding arrays
        
                console.log(employees.length);
                const engineers = []
                const interns = []
                console.log(employees);
                for (let i = 0; i < employees.length; i++) {
                    const currEmployee = employees[i]
                    if (currEmployee.role === "Engineer") {
                        const engineer = new Engineer(currEmployee.name, currEmployee.id, currEmployee.email, currEmployee.github)
                        engineers.push(engineer)
                    } else if (currEmployee.role === "Intern") {
                        const intern = new Intern(currEmployee.name, currEmployee.id, currEmployee.email, currEmployee.school)
                        interns.push(intern)
                    }
                }
                //Create preformatted cards for each element of each array
                const managerCard = createManagerCard(employees[0]);
                const engineerCards = createEngineerCards(engineers);
                const internCards = createInternCards(interns);

                //combine card templates into base html template
                const html = htmlHelper(managerCard, engineerCards, internCards);

                //write to file and create html
                fs.writeFile('index.html', html, (err) =>
                    err ? console.error(err) : console.log('Success!')
                );
            }
        })
}

//create new object based on chosen employee type, push to employee array & ask if another employee is required
function createIntern(data) {
    const newInt = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
    employees.push(newInt);
    addEmployee();
}

function createEngineer(data) {
    const newEng = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
    employees.push(newEng);
    addEmployee();
}

function createManager(data) {
    const newMan = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);
    employees.push(newMan);
}

//prompt user to choose which type of employee they would like to create 
function createEmployees() {
    let proceed = true;
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'empChoice',
                message: 'Choose employee type!',
                choices: ['Engineer', 'Intern']
            }
        ])
        .then(data => {
            switch (data.empChoice) {
                case 'Engineer':
                    newEngineer();
                    break;
                case 'Intern':
                    newIntern();
                    break;
                default:
                    console.log("Something went wrong, please try again!");
                    proceed = false;
                    break;
            }
        });
}
//initializer function to call from index.js
function init() {
    newManager();
}

//export init
module.exports = init;