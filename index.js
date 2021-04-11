// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input

const questions = () => { 
    inquirer.prompt([
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


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
let init = () => {
    try {
        const answers = questions();
        console.log(answers);
    }   catch(err) {
        console.log(err);
    }
  }

// Function call to initialize app
init();
