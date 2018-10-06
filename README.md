# BeanLounge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

### By Jared Lutz, Robin Sola, Matt Nardoni, Joe Mckinney May 14th - May 18th

## Description
This is a website people can visit to purchase bean bag chairs.  Users are able to visit the site and add or remove bean bag chairs from their cart, and admins with the proper credentials can sign in and have access to the admin page. The admin page lets admins create new bean bag chairs to add to the marketplace, edit existing bean bag chairs, or remove chairs that have sold out. 

## Plain English Specs
Behavior | Input | Output
---------|-------|-------
Display a beanbag | User visits homepage | Beanbag shows up on page
Display multiple beanbags | user visits homepage | multiple bean bags show up on page
user can view single beanbags | "click" | focus on selected beanbag
user can sign in as an admin | input credentials | output access to beanbag edit/add/remove form
user can filter bags | select family size bean bags | only bean bags of the family designation will display



#IMPORTANT
To access this page in a live development server, you will need to follow the instructions listed below under "Firebase Setup Instructions" before following the live development server

## Setup and Installation requirements

### To clone project to desktop:
* Copy path from Github,
* Change directories to Desktop,
* with command line, enter "git clone + path", change directories into newly added project directory "The Bean Lounge"
### To view source code on your machine:
* From the project root directory in the command line, enter "atom .",
* Stand back as the project is opened in atom, this can be exciting.





## Firebase Setup instructions
* First, create a free firebase account.  
* Once you've created an account, you should be taken to a user dashboard area, with an option to Create a New Project. Select this option, provide a name for your new project, and select your Country/region from the drop-down menu.
* You'll then be taken to an "Overview" area. Where you'll be offered three options: Choose the "Add firebase to your web-app" option. This will open a prompt with credentials in it.
* Create a file called "api-keys.ts" in the src/app/ directories.
* rename variable holding credentials to look like this, but use your new credentials instead of the x's: export ** export var masterFirebaseConfig = { apiKey: "xxxx", authDomain: "xxxx.firebaseapp.com", databaseURL: "https://xxxx.firebaseio.com", storageBucket: "xxxx.appspot.com", messagingSenderId: "xxxx" };**
* Once this is done, go to the firebase webpage, and click the three dots on the right of the project display box. There should be an option to import .json files. Choose that and then go to the sample-articles.json file and import it. This will add sample articles to your firebase project so you will be able to serve the project and view it.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
