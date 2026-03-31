const variableMoney = async (fontIncome, howOut, whereWasIt) => {
    const moneyVariable = {
        howOut,
        whereWasIt
    }
    
    fontIncome.push(moneyVariable)
}

export {
    variableMoney
}