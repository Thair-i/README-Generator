const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

  // Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        
    }, 
    {
        type: 'input',
        name: 'user',
        message: 'What is your GitHub username?',
        
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the descritption of your project?'
    }, 
    {
        type: 'input',
        name: 'install',
        message: 'What are the installation instructions for you project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for your project?'

    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?'
    }, 
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instruction for your project?'
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'What is the license of your project?',
        choices: ['MIT', 'GNU', 'Apache', 'GUN', 'none'],
        default: 'MIT'
    }])
    .then(input => {
        return input;
    })
};

  //Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
        if(err) throw err;
        console.log('README has been created!')
    })
}

  //Create a function to initial app
function init() {
    questions() 
        .then(input => {
        const markdown = generateMarkdown.generateMarkdowns(input);
        
            writeToFile('README.md', markdown);
        })
        .catch(err => {
            console.log(err);
        })
}

  
init()