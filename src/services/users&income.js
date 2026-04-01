

//view your fonts of fixed income
const entraceFixedIncome = async(painel, fontsInput, balance) => {
    const FixedIncome =  {
        fontsInput,
        balance,
    }
    painel.push(FixedIncome)
}



export {
    entraceFixedIncome,
}