
//message of welcome
const message = async () => {

    line()
    console.log('\n     Bem-Vindo ao White Control\n')
    line()
}

//Function Line for views
async function line () {
    let lines = '-'
    for(let i = 0; i <= 35; i++){
    lines += "-"
    }
    console.log(lines)
    return
}

//View your painel of fixed income and view total Income
const informationsFixedIncome = async (painel) => {
    let totalIncome = 0
    console.log('\nRenda Fixa:\n')
    painel.forEach((item) => {
        totalIncome += item.balance
        console.log(`Fonte: ${item.fontsInput}, R$: ${item.balance}`)
    });
    console.log(`Total do mês: ${totalIncome}`)
}


//View youer painel of income variables and view total income
const viewIncomeVariable = async (fontIncome) => {
    let totalIncomeVariable = 0
    fontIncome.forEach((item) => {
        totalIncomeVariable += item.howOut
        console.log(`Você recebeu R$ ${item.howOut.toFixed(2).replace('.', ',')} de ${item.whereWasIt}`)
    })
    console.log(`No total você ganhou R$ ${totalIncomeVariable.toFixed(2).replace('.', ',')}`)
}


export {
    informationsFixedIncome,
    message,
    viewIncomeVariable,

}
