//view your fonts of fixed income
const entraceFixedIncome = async(painel, fontsInput, balance) => {
    const FixedIncome =  {
        fontsInput,
        balance,
    }
    painel.push(FixedIncome)
}

const variableMoney = async (fontIncome, whereWasIt, howInput ) => {
    const moneyVariable = {
        howInput,
        whereWasIt
    }
    
    fontIncome.push(moneyVariable)
}

export {
    entraceFixedIncome,
    variableMoney
}
