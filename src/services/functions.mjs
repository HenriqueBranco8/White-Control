

//View your painel of fixed income
const informationsFixedIncome = async (painel) => {
    let soma = 0
    painel.forEach((item) => {
        soma += item.balance
        console.log(`Fonte: ${item.fontsInput}, R$: ${item.balance}`)
    });
    console.log(`Total do mês: ${soma}`)
}

    

export {
    informationsFixedIncome,
}