class Employee {
  name;
  uniqueId;
  department;
  designation;
  basicSalary;
  birthYear;
  joiningYear;

  constructor(
    empName,
    empId,
    empDepartment,
    empDesignation,
    empSalary,
    empBirthYear,
    empJoiningYear
  ) {
    this.name = empName;
    this.uniqueId = empId;
    this.department = empDepartment;
    this.designation = empDesignation;
    this.basicSalary = empSalary;
    this.birthYear = empBirthYear;
    this.joiningYear = empJoiningYear;
  }

  //Setters
  setEmpName(empName) {
    this.name = empName;
  }

  setUniqueId(empId) {
    this.uniqueId = empId;
  }

  setDepartment(empDepartment) {
    this.department = empDepartment;
  }

  setDesignation(empDesignation) {
    this.designation = empDesignation;
  }

  setBasicSalary(empSalary) {
    this.basicSalary = empSalary;
  }

  setBirthYear(empBirthYear) {
    this.birthYear = empBirthYear;
  }

  setJoiningYear(empJoiningYear) {
    this.joiningYear = empJoiningYear;
  }

  //Getters
  getEmpName() {
    return this.name;
  }

  getUniqueId() {
    return this.uniqueId;
  }

  getDepartment() {
    return this.department;
  }

  getDesignation() {
    return this.designation;
  }

  getBasicSalary() {
    return this.basicSalary;
  }

  getBirthYear() {
    return this.birthYear;
  }

  getJoiningYear() {
    return this.joiningYear;
  }
}

const form = document.getElementById("regForm");

function sal(val, jAge) {
  if (val > 500000 && val < 750000) {
    if (jAge >= 10) {
      let rent = val / 12;
      let tds = val * 0.05;
      let bonus = rent * 0.1;
      let house_rent = rent * 0.15;
      let total = val + 6000 + bonus + house_rent - tds;
      console.log("Total:" + total);
    } else {
      let rent = val / 12;
      let tds = val * 0.05;
      let bonus = rent * 0.1;
      let house_rent = rent * 0.15;
      let total = val + bonus + house_rent - tds;
      console.log("Total:" + total);
    }
  } else if (val > 750000 && val < 1000000) {
    if (jAge >= 10) {
      let rent = val / 12;
      let tds = emp.basicSalary * 0.075;
      let bonus = rent * 0.1;
      let house_rent = rent * 0.15;
      let total = val + 6000 + bonus + house_rent - tds;
      console.log("Total:" + total);
    } else {
      let rent = val / 12;
      let tds = emp.basicSalary * 0.075;
      let bonus = rent * 0.1;
      let house_rent = rent * 0.15;
      let total = val + bonus + house_rent - tds;
      console.log("Total:" + total);
    }
  } else if (val > 1000000 && val < 1500000) {
    if (jAge >= 10) {
      let rent = val / 12;
      let tds = val * 0.15;
      let bonus = rent * 0.1;
      let house_rent = rent * 0.15;
      let total = val + 6000 + bonus + house_rent - tds;
      console.log("Total:" + total);
    } else {
      let rent = val / 12;
      let tds = val * 0.15;
      let bonus = rent * 0.1;
      let house_rent = rent * 0.15;
      let total = val + bonus + house_rent - tds;
      console.log("Total:" + total);
    }
  } else if (val > 1500000) {
    if (jAge >= 10) {
      let rent = val / 12;
      let tds = val * 0.2;
      let bonus = rent * 0.1;
      let house_rent = rent * 0.15;
      let total = val + 6000 + bonus + house_rent - tds;
      console.log("Total:" + total);
    } else {
      let rent = val / 12;
      let tds = val * 0.2;
      let bonus = rent * 0.1;
      let house_rent = rent * 0.15;
      let total = val + bonus + house_rent - tds;
      console.log("Total:" + total);
    }
  } else {
    let tds = val;
    let bonus = (val / 12) * 0.1;
    let house_rent = (val / 12) * 0.15;
    let total = val + bonus + house_rent - tds;
  }
}

function age(val) {
  let date = new Date().getFullYear();
  let age = date - val;
  console.log("Age :" + age);
  return age;
}

function joinDate(val) {
  let date = new Date().getFullYear();
  let joinAge = date - val;
  return parseInt(joinAge);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.getElementById("Name").value;
  let id = document.getElementById("id").value;
  let dept = document.getElementById("dept").value;
  let desg = document.getElementById("desg").value;
  let salary = document.getElementById("sal").value;
  let birth = document.getElementById("birth").value;
  let join = document.getElementById("join").value;

  const emp = new Employee(name, id, dept, desg, salary, birth, join);

  console.log("Name: " + emp.name);
  console.log("ID: " + emp.uniqueId);
  console.log("Department: " + emp.department);
  console.log("Designation: " + emp.designation);
  console.log("Basic Salary: " + emp.basicSalary);
  console.log("Birth Year: " + emp.birthYear);
  console.log("Joining year: " + emp.joiningYear);

  sal(parseInt(emp.basicSalary), joinDate(emp.joiningYear));

  age(emp.birthYear);
});
