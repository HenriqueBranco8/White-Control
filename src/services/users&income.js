// Add fixed income
const addFixedIncome = (fixedIncomeList, source, amount) => {
    const fixedIncome = {
        source,
        amount,
    }

    fixedIncomeList.push(fixedIncome)
}

// Add variable income
const addVariableIncome = (variableIncomeList, source, amount) => {
    const variableIncome = {
        source,
        amount,
    }

    variableIncomeList.push(variableIncome)
}

// Add expense
const addExpense = (expenseList, amount, category) => {
    const expense = {
        amount,
        category,
    }

    expenseList.push(expense)
}

export {
    addFixedIncome,
    addVariableIncome,
    addExpense,
}