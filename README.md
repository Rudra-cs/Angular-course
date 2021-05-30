## Full Stack MEAN Course Provided by [Syllogistek](https://www.syllogistek.com/ "Syllogistek")

### Day 1 (15/05/2021) :

- Learnt about Domain Name Server(DNS), World Wide Web(www), IP adress, How a server works?, What is a Server?
- Basics of MEAN Stack, What does MEAN stands for?, What technologies are used in that stack?
- What is an URL?, How does it work?
- Learnt about basic HTML tags like h1,h2,h3 also about lists ol(ordered lists) ul(unordered lists)
- Completed the Assignment which was to built a webpage for your own profile

### Day 2 (17/05/2021) :

- Learnt about description tags in HTML like dt, dl, dd and also tags like strong, em, u, del, a (anchor tag)
- Table tags like td, tr, th also about the table attr. colspan, rowspan, border
- CSS inline, internal, external styling, fonts, colors, CSS class and id selectors
- HTML forms, input, label, radiobuttons, checkboxes, select, options, textarea
- &nbsp for giving space in the input tag
- Completed the assignment which was to create 2 webpages i.e. registration and login

### Day 3 (18/05/2021) :

- More about CSS external styling, external fonts from website like Google Fonts, favicons
- HTML div properties like float, clear
- CSS Media Queries
- CSS Framework Bootstrap introduction, container, breakpoints, row, col
- Bootstrap Components like Forms, Navbar
- Completed the assignment which was to make registration and login form using Bootstrap Framework.

<img src="Images/Register.png" width="800" height="400">

### Day 4 (19/05/2021) :

- Javascript Basics , console.log(), alert(), ES6 Scripts
- Difference between var, let, const
- typeof keyword, scope, prompt
- Conditional Functions, NaN, Number
- Completed the assignment which was to write simple programs in Javascript

### Day 5 (20/05/2021) :

- Functions, Anonymous Function, Arrow Function
- setTimeout(), Async Programming, Arrays
- push(), pop(), shift(), unshift(), splice(), forEach(), filter(), map() functions with examples
- Objects, Object Literal, object destructuring,, this keyword
- Completed the assignment which was to write a program for perfect no. using arrow function

### Day 6 (21/05/2021) :

- camelCase convention, Class, Constructor, set, get
- DOM (Document Object Model), innerHTML, innerText, document.getElementById(), document.getElementByClassName(), querySelector, querySelectorAll
- Events, onclick(), appendChild(), addEventListener(), event.preventDefault(), d-none, classList
- Completed the Assignment based on Class, Objects and Events

### Day 7 (22-05-2021) :

- Recap of Objects, Class and Js Concepts, Validation
- Regex, Patterns
- In vscode shift + alt + down arrow to copy the above line
- Completed the assignment which was to make a expense tracker webpage TODO: Add LocalStorage

### Day 8 (24-05-2021) :

- Blocking and Non-Blocking I/O, Introduction to Node.js, What is Node.js?, Concurrency
- Module, Node Modules, import modules, Bulit-in Modules
- Fs Module, Path, https, crypto
- npm, third party module, prompt-sync
- No Assignment for today

### Day 9 (25-05-2021) :

- Recap on Noje.js basics, creating a http server, sending and getting res and req
- Build, Start, package.json, npm start, npm run build, nodemon
- buffer, server, json, http module, req, res, pipe
- Completed the Assignment which was based on fs module

#### Node modules Setup and external module

```shell
npm init
npm install prompt-sync
```

#### Require the modules

```sh
const fs = require("fs");
const prompt = require("prompt-sync")();
```

### Day 10 (27-05-2021) :

- POST req, GET req, Difference between an library and Framework
- Introduction to Express.js, REST API
- Postman, Middleware, Routes
- CRUD operations

#### Installing Express

```shell
npm install express
```

#### Require the Express.js

```sh
const express = require("express");
const app = express();
```

#### Express Routing

```sh
// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})
```

### Day 11 (28-05-2021) :

- Continuation of CRUD Operations
- Introduction to MongoDB (Non-Relational DB)
- MongoDb Atlas setup, Moongoose
- Completed the assignment which was to make an api for CRUD operations for player's data

#### Install Mongoose

```sh
  npm install mongoose
```

#### Require Mongoose

```sh
  const mongoose = require("mongoose");
```

### Day 12 (29-05-2021) :

- Async, Await and Promises
- Folder Structure During A Project (Routes, Controllers, Models)
- Middleware, Express Router
- Creating Blog api using mongoose and mongo db atlas, Schema
- CRUD Operations using Mongoose
