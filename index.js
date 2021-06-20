// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

// TODO: Create an array of questions for user input

const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of the project?",
            //validate to make sure there is a value there
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log('Please enter your project name.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "purpose",
            message: "Define in a few words the purpose:",
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log('Please enter a project description.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "concept",
            message: "Define in a few words the proof of concept:",
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log('Please enter a concept description.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "built",
            message: "what programming languages did you use?",
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log('Please enter a valid input.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "contribution",
            message: "Made by:",
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log('Please enter a valid input.');
                    return false;
                }
            }
        },
    ])
};


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
let init = async () => {
    try {
        const answers = await questions();
        console.log(answers);
        createReadme = answers => {
            return `
<h1>        ${answers.title}</h1>
          
##          Purpose
            ${answers.purpose}

##          Proof of Concept
            ${answers.concept}

##          Built with
            ${answers.built}
        
##          Contribution
            ${answers.contribution}
            `


        };
        // function to create dynamic README file...
        let createContent = createReadme(answers);
        util.promisify(fs.writeFile)('READMEgenerated.md', createContent.toString());
        // end of dynamic README function...
    } catch (err) {
        console.log(err);
    }
}
// end of function to initialize app...

// Function call to initialize app
init();
