// 1. Data storage with arrays
let monthlyBudget = 0;
let expenses = []; // Array to store multiple expense records

// 2. DOM Elements
const budgetInput = document.getElementById("budgetInput");
const expenseNameInput = document.getElementById("expenseName");
const expenseAmountInput = document.getElementById("expenseAmount");
const expenseList = document.getElementById("expenseList");
const budgetDisplay = document.getElementById("budgetDisplay");
const totalDisplay = document.getElementById("totalDisplay");
const balanceDisplay = document.getElementById("balanceDisplay");
const statusDisplay = document.getElementById("statusDisplay");

// 3. Reusable Functions
function calculateTotal() {
  let total = 0;
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount; // Loop through array
  }
  return total;
}

function calculateBalance(budget, total) {
  return budget - total;
}

function getBudgetStatus(balance) {
  // Conditional statements for decision making
  if (balance > 0) {
    return { message: `Great! You have KSH ${balance} remaining.`, type: "success" };
  } else if (balance === 0) {
    return { message: "You have used your full budget.", type: "warning" };
  } else {
    return { message: `Overspent by KSH ${Math.abs(balance)}! Cut costs.`, type: "warning" };
  }
}

function updateDashboard() {
  const total = calculateTotal();
  const balance = calculateBalance(monthlyBudget, total);
  const status = getBudgetStatus(balance);

  // DOM Manipulation - update directly on webpage
  budgetDisplay.textContent = `Budget: KSH ${monthlyBudget}`;
  totalDisplay.textContent = `Total Expenses: KSH ${total}`;
  balanceDisplay.textContent = `Remaining: KSH ${balance}`;
  
  statusDisplay.textContent = status.message;
  statusDisplay.className = `status ${status.type}`;

  // Loop to display array data
  expenseList.innerHTML = "";
  for (let expense of expenses) {
    const li = document.createElement("li");
    li.textContent = `${expense.name} - KSH ${expense.amount}`;
    expenseList.appendChild(li);
  }

  console.log("===== SpendWise Budget Report =====");
  console.log("Expenses:", expenses);
  console.log("Balance:", balance);
}

// 4. Event Listeners for user interactions
document.getElementById("setBudgetBtn").addEventListener("click", () => {
  monthlyBudget = Number(budgetInput.value);
  if (monthlyBudget <= 0) {
    alert("Please enter a valid budget");
    return;
  }
  updateDashboard();
});

document.getElementById("addExpenseBtn").addEventListener("click", () => {
  const name = expenseNameInput.value.trim();
  const amount = Number(expenseAmountInput.value);

  if (!name || amount <= 0) {
    alert("Enter valid expense name and amount");
    return;
  }

  // Store in array as object
  expenses.push({ name, amount });
  
  expenseNameInput.value = "";
  expenseAmountInput.value = "";
  
  updateDashboard();
});