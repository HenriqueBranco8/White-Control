import chalk from "chalk"

//message of welcome
const messageWelcome = () => {
    line()
    console.log('\n             Bem-Vindo ao White Control\n')
    line()
}

//Function add Line for views
function line () {
    let lines = '-'
    for(let i = 0; i <= 50; i++){
        lines += "-"
    }
    console.log(lines)
}





//View variable income
let totalVariableIncome = 0

const viewIncomeVariable = (variableIncomeList) => {
    line()
    console.log('\nRenda Variável\n')

    variableIncomeList.forEach((item) => {
        totalVariableIncome += item.amount
        console.log(
            `Fonte: ${item.source},`,
            chalk.greenBright(`R$ ${item.amount.toFixed(2).replace('.', ',')}`)
        )
    })

    if(totalVariableIncome >= 1000){
        console.log(`\nTotal:`, chalk.greenBright(`R$: ${totalVariableIncome.toFixed(2).replace('.', ',')}\n`))
    } else if(totalVariableIncome <= 250){
        console.log(`\nTotal:`, chalk.redBright(`R$: ${totalVariableIncome.toFixed(2).replace('.', ',')}\n`))
    } else {
        console.log(`\nTotal:`, chalk.yellowBright(`R$: ${totalVariableIncome.toFixed(2).replace('.', ',')}\n`))
    }
}


//Delete item
const deleteItem = (variableIncomeList, sourceName) => {
    const indexIncome = variableIncomeList.findIndex(
        item => item.source === sourceName
    )
    
    if(indexIncome !== -1){
        variableIncomeList.splice(indexIncome,1)
    } else {
        console.log('Error')
    }
}


//Total income
let totalIncome = 0

const viewTotalIncome = () => {
    totalIncome = totalFixedIncome + totalVariableIncome

    line()
    if(totalIncome >= 1000){
        console.log(`\nTotal:`, chalk.greenBright(`R$: ${totalIncome.toFixed(2).replace('.', ',')}\n`))
    } else if(totalIncome <= 250){
        console.log(`\nTotal:`, chalk.redBright(`R$: ${totalIncome.toFixed(2).replace('.', ',')}\n`))
    } else {
        console.log(`\nTotal:`, chalk.yellowBright(`R$: ${totalIncome.toFixed(2).replace('.', ',')}\n`))
    }
    line()
}


//Expenses
let totalExpenses = 0

const viewExpenses = (expenseList) => {
    console.log('\nDespesas\n')

    expenseList.forEach((item) => {
        console.log(
            `Você gastou:`,
            chalk.red(` R$ ${item.amount.toFixed(2).replace('.', ',')}`),
            `| Com: ${item.category}`
        )
        totalExpenses += item.amount
    })

    line()
    if(totalExpenses >= 1501){
        console.log(`\nTotal gasto:`, chalk.bgRedBright(`R$: ${totalExpenses.toFixed(2).replace('.', ',')}\n`))
    } else if(totalExpenses >= 1001){
        console.log(`\nTotal gasto:`, chalk.red(`R$: ${totalExpenses.toFixed(2).replace('.', ',')}\n`))
    } else {
        console.log(`\nTotal gasto:`, chalk.yellow(`R$: ${totalExpenses.toFixed(2).replace('.', ',')}\n`))
    }
}


//Final balance
let allTotal = 0

const totalAll = () => {
    allTotal = totalIncome - totalExpenses

    if(allTotal >= 1000){
        console.log(`\nSaldo final:`, chalk.greenBright(`R$: ${allTotal.toFixed(2).replace('.', ',')}\n`))
    } else if(allTotal <= 250){
        console.log(`\nSaldo final:`, chalk.redBright(`R$: ${allTotal.toFixed(2).replace('.', ',')}\n`))
    } else {
        console.log(`\nSaldo final:`, chalk.yellowBright(`R$: ${allTotal.toFixed(2).replace('.', ',')}\n`))
    }
}

export {
    messageWelcome,
    viewIncomeVariable,
    deleteItem,
    viewTotalIncome,
    viewExpenses,
    totalAll,
}