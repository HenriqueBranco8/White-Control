

//View your painel of fixed income and view total Income
const informationsFixedIncome = async (painel) => {
    let totalIncome = 0
    painel.forEach((item) => {
        totalIncome += item.balance
        console.log(`Fonte: ${item.fontsInput}, R$: ${item.balance}`)
    });
    console.log(`Total do mês: ${totalIncome}`)
}

    

export {
    informationsFixedIncome,
}