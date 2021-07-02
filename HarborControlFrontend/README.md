<<<<<<< HEAD
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
=======
# HarborControlFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
>>>>>>> 267b5a4 (code push first time)
