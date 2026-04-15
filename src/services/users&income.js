// Add fixed income
const addFixedIncome = async (fixedIncomeList, source, amount) => {
    const fixedIncome = {
        source: String(source),
        amount: Number(amount),
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