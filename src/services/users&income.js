//view your fonts of fixed income
const entraceFixedIncome = async(painel, fontsInput, balance) => {
    const FixedIncome =  {
        fontsInput,
        balance,
    }
    painel.push(FixedIncome)
}

const variableMoney = async (fontIncome, fontsInput, Income ) => {
    const moneyVariable = {
        Income,
        fontsInput
    }
    
    fontIncome.push(moneyVariable)
}

const allExpenses = async (fontExpenses, HowMuchWasIt, WhereWasIt) => {
    const expenses = {
        HowMuchWasIt,
        WhereWasIt
    }
    fontExpenses.push(expenses)
    console.log(fontExpenses)
}

export {
    entraceFixedIncome,
    variableMoney,
    allExpenses,
}
