const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
  { type: 'input', name: 'title', message: 'What is the project title?' },
  { type: 'input', name: 'description', message: 'Provide a description:' },
  { type: 'input', name: 'installation', message: 'What are the steps required for installation?' },
  { type: 'input', name: 'usage', message: 'Usage instructions:' },
  { type: 'input', name: 'credits', message: 'Credits:' },
  { type: 'input', name: 'license', message: 'License:' },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log(`File ${fileName} has been successfully created!`);
    }
  });
}

// Function to generate README content
function generateMarkdown(data) {
  return `
    # ${data.title}

    ## Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Credits
    ${data.credits}

    ## License
    ${data.license}
    `;
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers);
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error("Error initializing app:", error);
    });
}

// Function call to initialize app
init();
