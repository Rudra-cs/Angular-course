const fs = require("fs");
const prompt = require("prompt-sync")();

const ch = prompt("Do you want to enter Employee details y or n : ");
if (ch == "y") {
  const inputCounter = prompt("Enter how many data to be inputed? ");

  // Blank Array for Initialising Data
  // const empArray = [];
  // const indArray = [];

  const employees = fs.readFileSync("./employee.json");
  const showData = JSON.parse(employees);

  // Looping
  for (let i = 0; i < inputCounter; i++) {
    // Take Input
    console.log(`Input No. ${i + 1}`);
    const empName = prompt("Enter Employee name? ");
    const empId = prompt("Enter Employee id? ");
    const empContact = prompt("Enter Employee contact? ");
    const empDepartment = prompt(
      "Enter Employee department: sales/marketing/gaming "
    );

    // Creating Employee Object
    const Employee = {
      name: empName,
      id: empId,
      contact: empContact,
    };

    const Individual = {
      id: empId,
      department: empDepartment,
    };

    const indemployees = fs.readFileSync(
      `./department/${Individual.department}.json`
    );
    const showIndData = JSON.parse(indemployees);

    //   Push Data into the Array
    showData.push(Employee);
    showIndData.push(Individual);

    // Insert Data into individual
    const indData = fs.writeFileSync(
      `./department/${Individual.department}.json`,
      JSON.stringify(showIndData)
    );
    // indArray.pop();
  }
  // Insert Data into master
  const empData = fs.writeFileSync("./employee.json", JSON.stringify(showData));

  // Show Data
  // const employees = fs.readFileSync("./employee.json");
  // const showData = JSON.parse(employees);
  console.log(showData);
} else if (ch == "n") {
} else console.log("Wrong Choice");

// For Searching
const ch2 = prompt("Do you want to Search Employee details y or n : ");
if (ch2 == "y") {
  // Search Implementation
  const Search = prompt("Enter the employee name to be searched: ");

  // Gettng Search Results
  const employees = fs.readFileSync("./employee.json");
  const showData = JSON.parse(employees);
  const searchData = showData.filter(function (emp) {
    return emp.name == Search;
  });

  // Getting Search Results id
  let arr = [];
  const data = searchData.forEach((element) => {
    arr.push(element.id);
  });
  // console.log(arr);

  // Getting Array of json files
  let arr2 = [];
  const ser = fs.readdirSync("./department");
  const dataSer = ser.forEach(function (element) {
    let v = fs.readFileSync(`./department/${element}`);
    let vData = JSON.parse(v);
    // console.log(vData);

    if (searchData.length == 0) console.log("No Data Found");
    else {
      for (let j = 0; j < vData.length; j++) {
        // console.log(vData[j]);
        arr.forEach(function (element) {
          if (element == vData[j].id) {
            arr2.push(vData[j]);
          }
        });
      }
    }
  });
  // console.log(arr2);

  // Console the data
  console.log("Search Data Result:");
  if (searchData.length == 0) console.log("No Data Found");
  else {
    for (let i = 0; i < searchData.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        // console.log(arr2[j].id);
        if (searchData[i].id == arr2[j].id) {
          console.log(`Name: ${searchData[i].name}`);
          console.log(`Id: ${searchData[i].id}`);
          console.log(`Contact: ${searchData[i].contact}`);
          console.log(`Department: ${arr2[j].department}`);
          console.log("--------");
        }
      }
    }
  }
} else if (ch2 == "n") {
} else console.log("Wrong Choice");
