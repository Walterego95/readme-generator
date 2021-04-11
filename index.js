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
        },
        {
            type: "input",
            name: "purpose",
            message: "Define in a few words the purpose:",
        },
        {
            type: "input",
            name: "languages",
            message: "What programming languages did you use?",
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
         createReadme = answers =>  {
            return `
<h1>${answers.title}</h1>
          
## Purpose
${answers.purpose}
        
## Languages Used
${answers.languages}
            `
        
        
        };
        // function to create dynamic README file...
        let createContent = createReadme(answers);
        util.promisify(fs.writeFile)('README.md', createContent.toString());
        // end of dynamic README function...
    }   catch(err) {
        console.log(err);
    }
  }
  // end of function to initialize app...

// Function call to initialize app
init();
