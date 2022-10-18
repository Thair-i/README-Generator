//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    const licenseType = data;
  let licenseString = " "
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "GNU General Public License 2.0") {
    licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  };
  if (licenseType === "Apache License 2.0") {
     licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    };
  if (licenseType === "GNU General Public License 3.0") {
      licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    };
  return licenseString
  };


    
    


// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (data.license === 'MIT') {
        return 'MIT';
    }
  }



// Create a function to generate markdown for README
function generateMarkdowns(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
`;
  
}

module.exports = { generateMarkdowns };
