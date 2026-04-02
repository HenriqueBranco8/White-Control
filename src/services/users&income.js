//view your fonts of fixed income
const entraceFixedIncome = async(painel, fontsInput, balance) => {
    const FixedIncome =  {
        fontsInput,
        balance,
    }
    painel.push(FixedIncome)
}

const variableMoney = async (fontIncome, fontsInput, howInput ) => {
    const moneyVariable = {
        howInput,
        fontsInput
    }
    
    fontIncome.push(moneyVariable)
}



export {
    entraceFixedIncome,
    variableMoney,

}
