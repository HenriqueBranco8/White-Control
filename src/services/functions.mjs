
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
let totalIncome = 0
const informationsFixedIncome = async (painel) => {
    console.log('\nRenda Fixa:\n')
    painel.forEach((item) => {
        totalIncome += item.balance
        console.log(`Fonte: ${item.fontsInput}, R$: ${item.balance.toFixed(2).replace('.', ',')}`)
    });
    console.log(`Total do mês: ${totalIncome.toFixed(2).replace('.', ',')}`)
}


//View youer painel of income variables and view total income
let totalIncomeVariable = 0
const viewIncomeVariable = async (fontIncome) => {
    
    line()
    console.log('\nRenda Variável\n')


    fontIncome.forEach((item) => {
        totalIncomeVariable += item.howInput
        console.log(`Fonte: ${item.whereWasIt}, R$ ${item.howInput.toFixed(2).replace('.', ',')} `)
    })
    console.log(`Total no mês: R$ ${totalIncomeVariable.toFixed(2).replace('.', ',')}`)
}



export {
    informationsFixedIncome,
    message,
    viewIncomeVariable,

}
