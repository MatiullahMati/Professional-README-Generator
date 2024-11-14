// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'None') return '';
    return `![License](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue.svg)`;
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === 'None') return '';
    switch (license) {
      case 'MIT':
        return 'https://opensource.org/licenses/MIT';
      case 'GPLv3':
        return 'https://www.gnu.org/licenses/gpl-3.0';
      case 'Apache 2.0':
        return 'https://opensource.org/licenses/Apache-2.0';
      case 'BSD 3-Clause':
        return 'https://opensource.org/licenses/BSD-3-Clause';
      default:
        return '';
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === 'None') return '';
    return `## License
  
  This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ${renderLicenseSection(data.license)}
  `;
  }
  
  export default generateMarkdown;