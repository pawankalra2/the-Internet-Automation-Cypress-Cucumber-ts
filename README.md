<h1 align="center">Automating Form Authentication (Login) Feature of http://the-internet.herokuapp.com using Cypress,Cucumber and Typescript </h1>

## Can be Run Locally on Window/Linux/Mac
Prerequisite :node and npm should be installed
- npm install -g cypress  (This is to install Cypress globally on machine)
- git clone https://github.com/pawankalra2/the-Internet-Automation-Cypress-Cucumber-ts.git or download Zip
- cd the-internet-automation-cypress-cucumber-ts
- npm install  (To download all dependencies of project from package.json)
- npm run runAllTests (to Run all Tests) or
- npm run PositiveScenario (to run only Positive scenario based on Cucumber tags in Feature file,configurable in package.json or
- npm run NegativetiveScenario (to run only Negative scenario based on Cucumber tags in Feature file ,configurable in package.json)

## Technology used:

 - Cypress 
 - TypeScript 
 - Cucumber
 - Mochawesome
 - multiple-cucumber-html-reporter

 ## Folder structure
 - integration : contains Feature files along with Step definition (.ts file ,under folder with same name)
 - support/pageObject : contains the Elements/Locators and methods which are reusable of login page ,
Common page contains elements/methods which are common.

 - fixtures : it has a testdata.json file which contain info like username password .This is kept separate as we may need to update during run time .We can use shell/powershell/bat to update this file during run time.

 - plugins/index.js : contains cucumber configuration .

 - reports : contain the html report (index.html and dependent files) that is auto generated from all individual json files (cucumber-json folder)after each test .

 - screenshots : contain screenshots of failed test .This can be configured in cypress.json.

 - videos : this contain the video of the test that ran .configurable in cypress.json

 cypress.json : contain cypress test configuration's .
 package.json : contains all npm dependencies required and commands/scripts to run tests.
 Note we can mention the details like browser/headed/headless/tests to run in the "scripts": {} of package.json

 ## Scenarios automated 
 TC001_formAuthentication.feature - Navigating to the-internet website ,Clicking on Form Authentication and verify Login Functionality of Application .
 It also has Negative scenario to ensure ,application does not allow incorrect useename/password .

## Integrating with CI-CD (Jenkins) : 
This test can be integrated with ci-cd tool like Jenkins and can be run on linux machine/docker image.
Refer Sample pipeline : jenkinsSamplePipelineCypress.groovy

Below find Report of the test Run

![image](https://user-images.githubusercontent.com/44734956/168641621-32d02797-0a0f-4b96-b7d5-c3a930a57659.png)


![image](https://user-images.githubusercontent.com/44734956/168641783-2570258a-f6e0-48e2-8cb4-51552155da5e.png)


