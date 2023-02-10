const inquirer = require('inquirer');
const { createManagerCard, createEngineerCards, createInternCards } = require('./createCards');
const htmlHelper = require('./generateHTML');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const fs = require('fs');

//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
employees = [];

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
                console.log(employees.length);
                const engineers = []
                const interns = []
                console.log(employees);
                for (let i = 0; i < employees.length; i++) {
                    const currEmployee = employees[i]
                    if (currEmployee.type === "Engineer") {
                        const engineer = new Engineer(e.name, e.id, e.email, e.github)
                        engineers.push(engineer)
                    } else if (currEmployee.type === "Intern") {
                        const intern = new Intern(e.name, e.id, e.email, e.school)
                        interns.push(intern)
                    }
                }

                const managerCard = createManagerCard(employees[0]);
                const engineerCards = createEngineerCards(engineers);
                const internCards = createInternCards(interns);

                const html = htmlHelper(managerCard, engineerCards, internCards);

                fs.writeFile('index.html', html, (err) =>
                    err ? console.error(err) : console.log('Success!')
                );
            }
        })
}

function createIntern(data) {
    const newInt = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
    employees.push(newInt)
    addEmployee();
}

function createEngineer(data) {
    const newEng = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
    employees.push(newEng)
    addEmployee();
}

function createManager(data) {
    const newMan = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);
    employees.push(newMan)
}


function createEmployees() {
    let proceed = true;
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'empChoice',
                message: 'Choose employee type, or "Finish", to generate roster page!',
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
function init() {
    newManager();
}

init();



