# SpendWise - Interactive Budget Tracker

## What improvements were made this week?
Previously SpendWise used prompts and only logged to console. This week I made it fully interactive:
- Added input fields and buttons instead of prompts
- Expenses are now stored in an array of objects
- Dashboard updates live on the page
- Real-time budget feedback

## How conditionals are used
In `getBudgetStatus()` function:
- if balance > 0 → shows success "You have remaining"
- else if balance === 0 → "full budget used"
- else → warning "Overspent". This helps user make financial decisions.

## How arrays are used
`let expenses = []` stores multiple records as objects `{name, amount}`. Using `push()` to add new expenses, allows managing unlimited expenses instead of 3 fixed variables.

## How the DOM is updated
Using `getElementById()`, `textContent`, `createElement()`, `appendChild()` to display budget, total, balance, status and list. No more console-only output.

## How user interactions are handled
Two event listeners:
- `setBudgetBtn` click → sets monthlyBudget
- `addExpenseBtn` click → validates and adds to array
This triggers calculate → update flow.

## Challenges encountered
1. Budget showing KSH 0 when input empty - Fixed by validating Number() and checking <=0 with alert.
2. Expense list duplicating - Fixed by clearing `innerHTML=""` before loop.
3. Git push auth error - Resolved by using GitHub personal access token.

Tech: HTML, CSS, JavaScript (DOM, Arrays, Loops, Conditionals, Events)