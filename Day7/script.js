// TODO :
//  1: regex form (done)
//  2:Local Storage

"use strict";
// Selectors
const nameInput = document.querySelector("#name");
const amountInput = document.querySelector("#amount");
const dateInput = document.querySelector("#date");
const addBtn = document.querySelector("#btnAdd");
const expenseList = document.querySelector("#expense-list");
const show = document.querySelector(".show");

// Event Listeners
// document.addEventListener("DOMContentLoaded", getExpenses);
addBtn.addEventListener("click", addExpense);
expenseList.addEventListener("click", deleteCheck);

// Functions

function addExpense(event) {
  // Prevent form from submitting
  event.preventDefault();
  //   Condition
  if (nameInput.value === "") {
    alert("Name Value cannot be null");
  } else if (dateInput.value === null) {
    alert("Date Value cannot be null");
  } else if (amountInput.value === "") {
    alert("Amount Value cannot be null");
  } else {
    // show.classList.add("d-none");
    let testName = valName(nameInput.value);
    let testAmount = valAmount(amountInput.value);
    let testDate = valDate(dateInput.value);
    if (testName === 0 && testAmount === 0 && testDate === 0) {
      add();
    }
  }
}

function valName(name) {
  let regex = /^[a-zA-Z ]{2,30}$/;
  if (!regex.test(name)) {
    alert("Name Input Format is wrong");
    return 1;
  }
  return 0;
}

function valAmount(amount) {
  let regex = /^[1-9]+[0-9]*$/;
  if (!regex.test(amount)) {
    alert("Amount Input Cannot be Negative");
    return 1;
  }
  return 0;
}

function valDate(date) {
  //   let regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  //   let regex = /^\d{4}-\d{1,2}-\d{1,2}$/;
  let regex = /\b(19|[2-9][0-9])\d{2}-([0|1])\d-([0-3])\d\b/;
  if (!regex.test(date)) {
    alert("Date Input is Wrong");
    return 1;
  }
  return 0;
}

function add() {
  //   Expense Div
  const expenseDiv = document.createElement("div");
  expenseDiv.classList.add("expense");
  expenseDiv.classList.add("row");
  // Create li
  const newExpense = document.createElement("li");
  newExpense.innerText = `Rs. ${amountInput.value} of ${nameInput.value} item/s  was bought on ${dateInput.value}`;
  newExpense.classList.add("expense-item");
  expenseDiv.appendChild(newExpense);
  //   Add Expense to local Storage
  //   saveLocalExpenses(nameInput.value);
  //   Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete-btn");
  expenseDiv.appendChild(deleteButton);
  //   Append to List
  expenseList.appendChild(expenseDiv);
  //clear Expense Input
  nameInput.value = "";
  amountInput.value = "";
  dateInput.value = "";
}

function deleteCheck(ev) {
  const item = ev.target;
  //   Delete the Item
  if (item.classList[0] === "delete-btn") {
    const expense = item.parentElement;
    // Animation
    expense.classList.add("fall");
    // removeLocalExpenses();
    expense.addEventListener("transitionend", function () {
      expense.remove();
    });
  }
  //   //   Check for Data
  //   if (expenseList.value === undefined) {
  //     show.classList.remove("d-none");
  //   }
}

// function saveLocalExpenses(expense) {
//   // Check to see if I have already have a items in there?
//   let expenses;
//   if (localStorage.getItem("expenses") == null) {
//     expenses = [];
//   } else {
//     expenses = JSON.parse(localStorage.getItem("expenses"));
//   }

//   expenses.push(expense);
//   localStorage.setItem("todos", JSON.stringify(expenses));
// }

// function getExpenses() {
//   // Check to see if I have already have a items in there?
//   let expenses;
//   if (localStorage.getItem("expenses") == null) {
//     expenses = [];
//   } else {
//     expenses = JSON.parse(localStorage.getItem("expenses"));
//   }

//   expenses.forEach(function (expense) {
//     //   Expense Div
//     const expenseDiv = document.createElement("div");
//     expenseDiv.classList.add("expense");
//     expenseDiv.classList.add("row");
//     // Create li
//     const newExpense = document.createElement("li");
//     newExpense.innerText = expense;
//     newExpense.classList.add("expense-item");
//     expenseDiv.appendChild(newExpense);
//     //   Delete Button
//     const deleteButton = document.createElement("button");
//     deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
//     deleteButton.classList.add("delete-btn");
//     expenseDiv.appendChild(deleteButton);
//     //   Append to List
//     expenseList.appendChild(expenseDiv);
//   });
// }

// function removeLocalExpenses(expense) {
//   // Check to see if I have already have a items in there?
//   let expenses;
//   if (localStorage.getItem("expenses") == null) {
//     expenses = [];
//   } else {
//     expenses = JSON.parse(localStorage.getItem("expenses"));
//   }

//   expenseIndex = expense.children[0].innerText;
//   expenses.splice(todos.indexOf(expenseIndex), 1);
//   localStorage.setItem("expenses", JSON.stringify(expenses));
// }
