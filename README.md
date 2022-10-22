# README generator
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Description
A simple NodeJS program that generates a professional README markdown file based on user input. Use this to create a full README or a template to get you started. Even this README was made with the program!

This program utilizes the Inquirer package to prompt the user through the command line. Made during the University of Utah's coding bootcamp, this was one of my first command line applications.

Created with:
JavaScript
Node JS
Inquirer
Table of Contents
Installation
Usage
License
Contributing
Questions
Installation


##User Story

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

##Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README


Usage
After using the node index.js command, running the app is simple! You will be given a number of prompts to answer. Once you answer all of the questions the README.md file will be created in the /dist folder of the project. This process can be seen in the GIF below. From there simply copy the README from the /dist directory and paste it in your new project.

demonstration video:[(https://youtu.be/b0he0K9Btzw)]

image

![Screen Shot 2022-10-22 at 1 29 47 PM](https://user-images.githubusercontent.com/110577068/197361854-8fb4ade3-c595-4da2-8d02-91e8b54aa054.png)

