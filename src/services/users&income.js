//view your fonts of fixed income
const entraceFixedIncome = async(painel, fontsInput, balance) => {
    const FixedIncome =  {
        fontsInput,
        balance,
    }
    painel.push(FixedIncome)
    return
  
}

const variableMoney = async (fontIncome, howOut, whereWasIt) => {
    const moneyVariable = {
        howOut,
        whereWasIt
    }
    
    fontIncome.push(moneyVariable)
}

export {
    entraceFixedIncome,
    variableMoney
}
