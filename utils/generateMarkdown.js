//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    const licenseType = data;
  let licenseString = " "
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
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
  ${data.user} ${data.email} ${data.description} ${data.install} ${data.contribution}
  ${data.usage} ${data.test}
  ${renderLicenseBadge(data.license)}



  
`;
}

module.exports = { generateMarkdowns };
