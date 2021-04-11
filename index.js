// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
//const questions = [];

let questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of the project?",
        },
        {
            type: "input",
            name: "purpose",
            message: "Define in a few words the purpose:"
        },
        {
            type: "input",
            name: "languages",
            message: "What programming languages did you use?",
        },
    ])
};
console.log(inquirer.prompt);



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
