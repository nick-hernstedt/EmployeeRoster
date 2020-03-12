const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​
const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html')

const render = require("./lib/htmlRenderer.js")

const employees = []

// Write code to use inquirer to gather information about the development team members,
function addEmployee() {
    inquirer
        .prompt({
            type: 'list',
            message: 'ready to make your team?',
            choices: ['yes', 'no'],
            name: 'initialize'
        }).then((answer) => {

            if (JSON.stringify(answer) == `{"initialize":"yes"}`) {
                inquirer
                    .prompt({
                        type: 'list',
                        message: 'What kind of employee are you adding?',
                        choices: ['Manager', 'Engineer', 'Intern'],
                        name: 'employeeType'
                    }).then((employeeType) => {
                        switch (JSON.stringify(employeeType)) {
                            case `{"employeeType":"Manager}`:
                                manager()
                                break
                            case `{"employeeType":"Intern}`:
                                intern()
                                break    
                            case `{"employeeType":"Engineer}`:
                                engineer()
                                break         
                            default:
                                break                           
                        }
                    })
            } else { console.log('I understand, have a nice day.')}
        })
}

function manager() {
    console.log('Input your Managers information')
    inquirer 
        .prompt ([
            {
                type: 'input',
                message: "What is the name of this manager?",
                name: 'managerName'
            },
            {
                type: 'input',
                message: "Enter manager's ID number.",
                name: managerId
            },
            {
                type: 'input',
                message: "Enter manager's email",
                name: "managerEmail"
            },
            {
                type: 'input',
                message: "What is this manager's office number?",
                name: 'managerNumber'
            }
        ]).then((answers) => {
            const currentManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber, 'Manager')
            employees.push(currentManager)
            anotherEmployee()
        })
}



addEmployee();











​

// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```