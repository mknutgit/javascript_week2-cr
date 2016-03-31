Use Ctrl + Shift + M to generate a readme preview in ATOM.

# Angular 2 Basics independent project

## JavaScript, Week 2 objectives:

* Does the website work as expected?
* Is the app structured in a logical way, including a model, multiple components and TypeScript syntax? Interfaces are not a requirement for this assignment.
* Does the app allow you to create and edit new instances of a model?
* Does the app allow you to view a list of foods names and then see the other properties in a details view on click?
* Does the app allow you to filter foods based on their calories?
* Do you manage your build tool dependencies with npm?
* Do you manage your front-end dependencies with Bower?
* Does the app include a gulp-based asset pipeline with a development server? Does the asset pipeline include all tasks from the homework this week?
* Does the code stick to standards from previous weeks? (Testing is not required this week.)
* Are you able to discuss the flow of your code and the concepts behind it with an instructor using correct terminology?

### By: Matt Knutson

### Description

As a user you can:

1. Log a food by submitting a form with its name, calories and details.
2. View a list of only the names of the foods logged, and click on a name to view the details and calories for that food.
3. View either all foods, only unhealthy foods that are more than 300 calories, or only healthy foods that are less than 300 calories.
4. Click on a food and then edit its name, details or calories.

### Known Bugs

* None at this time.

### Setup

Clone this repo on to your desktop, make sure that you have node.js installed on your computer and then:
* navigate into the project folder.
* In your terminal, run the commands:
```shell
npm install
bower install
```
* Once they are finished installing successfully, enter the commands:
```shell
gulp build --production
gulp serve
```
* Enjoy the website!

### Technologies Used
* Angular2
* HTML
* CSS
* SCSS
* JavaScript
* Node.js
* bower
* npm
* Gulp
* Bootstrap v3.3.6

###Copyright & Licensing

Copyright (c) 2015 **Matt Knutson**

*This software is licensed under the MIT license.*
