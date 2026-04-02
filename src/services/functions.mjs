
//message of welcome
const message = async () => {

    line()
    console.log('\n     Bem-Vindo ao White Control\n')
    line()
}

//Function add Line for views
async function line () {
    let lines = '-'
    for(let i = 0; i <= 35; i++){
    lines += "-"
    }
    console.log(lines)
    return
}


//View your painel of fixed income and view total Income
//Variable what calculates total of Fixed Income
let totalIncomeFixed = 0

const informationsFixedIncome = async (painel) => {
    //message
    console.log('\nRenda Fixa:\n')

    //go walk the painel of font fixed or variable and more all itens in font painel
    painel.forEach((item) => {
        totalIncomeFixed += item.balance
        console.log(`Fonte: ${item.fontsInput}, R$: ${item.balance.toFixed(2).replace('.', ',')}`)
    });

    //more the total Fixed income
    console.log(`Total do mês: ${totalIncomeFixed.toFixed(2).replace('.', ',')}`)
}


//View your painel of income variables and view total income
//variable what caculates total Income Variable
let totalIncomeVariable = 0

const viewIncomeVariable = async (fontIncome) => {
    //Message
    line()
    console.log('\nRenda Variável\n')

    //walk the painel of font Variable and more all itens
    fontIncome.forEach((item) => {
        totalIncomeVariable += item.Income
        console.log(`Fonte: ${item.fontsInput}, R$ ${item.Income.toFixed(2).replace('.', ',')} `)
    })
    console.log(`Total no mês: R$ ${totalIncomeVariable.toFixed(2).replace('.', ',')}`)
}


//Delete item in array
const deleteItem = async (fontIncome, nameFont) => {

    //to check index of font 
    const indexIncome = fontIncome.findIndex(font => font.fontsInput === nameFont)
    
    //if Index == True, delete item
    if(indexIncome !== -1){
        fontIncome.splice(indexIncome,1)
        
    } else {
        console.log('Error')
    }
    
    return
}

//View Total Income
//Variable for save total income of all pain
let totalIncome = 0
const viewTotalIncome = async () => {
    //Sum Total Income Fixed and variable for to do the total of all
    totalIncome = totalIncomeFixed + totalIncomeVariable

    //message
    line()
   console.log(`No total você teve uma renda de R$: ${totalIncome.toFixed(2).replace('.', ',')}`)
    line()
    return
}



export {
    informationsFixedIncome,
    message,
    viewIncomeVariable,
    deleteItem,
    viewTotalIncome,
    
}
