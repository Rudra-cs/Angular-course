const fs = require("fs");
const prompt = require("prompt-sync")();

const inputCounter = prompt("Enter how many data to be inputed? ");

// Blank Array for Initialising Data
// const empArray = [];

// Show Data
const employees = fs.readFileSync("./employee.json");
const showData = JSON.parse(employees);
// console.log("ALL Data :-");
// console.log(showData);

// Looping
for (let i = 0; i < inputCounter; i++) {
  // Take Input
  const empName = prompt("Enter Employee name? ");
  const empId = prompt("Enter Employee id? ");
  const empContact = prompt("Enter Employee contact? ");
  const empDepartment = prompt("Enter Employee department? ");

  // Creating Employee Object
  const Employee = {
    name: empName,
    id: empId,
    contact: empContact,
    department: empDepartment,
  };

  //   Push Data into the Array
  showData.push(Employee);
}

// Insert Data
const empData = fs.writeFileSync("./employee.json", JSON.stringify(showData));

// Search Implementation
const Search = prompt("Enter the employee name to be search: ");
const searchData = showData.filter(function (emp) {
  return emp.name == Search;
});
console.log("Search data Result:");
if (searchData.length == 0) console.log("No Data Found");
else console.log(searchData);
