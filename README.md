# HarborControlAssessment

This Assessment has two sub projects(API/Client) 
1) HarborWebApi - Backend
  - This project of web API uses the .Net 5 framework
  - It has class libraries for business, data logic and common utility
    
2) HarborControlFrontend - Frontend
  - Developed UI using Angular version 12.0 with default bootstrap for css, and font awesome icon
  
Steps to run this project
1) Build & Run Harbor.WebApi Project(Install framwork if required).
2) Copy Host URL from the browser without "/index.html" to use it in Frontend.
3) Open HarborControlFrontend Project and replace the value of baseURL with Copied URL in src\eenvironment\environment.ts file
4) Execute npm install in terminal to install npm package.
5) After installing all dependencies, run ng serve or npm start command. 
6) Open the url which is populated in terminal
