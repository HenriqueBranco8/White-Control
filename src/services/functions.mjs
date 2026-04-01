

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

    

export {
    informationsFixedIncome,
    message
}