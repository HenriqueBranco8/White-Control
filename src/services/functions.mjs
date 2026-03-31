//View incomesVariable
const viewIncomeVariable = async (fontIncome) => {
    let totalIncomeVariable = 0
    fontIncome.forEach((item) => {
        totalIncomeVariable += item.howOut
        console.log(`Você recebeu R$ ${item.howOut.toFixed(2).replace('.', ',')} de ${item.whereWasIt}`)
    })
    console.log(`No total você ganhou R$ ${totalIncomeVariable.toFixed(2).replace('.', ',')}`)
}

export {
    viewIncomeVariable,
}