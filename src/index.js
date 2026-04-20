import * as functions from './services/functions.mjs'
import incomeFixed from './services/prompts/prompt-main.js'
import prompt from 'prompt'
import teste from './services/incomes/fixedIncome/fixedIncome.js'




async function main() {
    functions.messageWelcome()
    prompt.start()
    prompt.get(incomeFixed, (err, choose) => {
        if(err){
            console.log('erro')
        }
        if(choose.chooseIncome === '1'){
            teste()
        } else if(choose.chooseIncome === '2') {
            console.log('Variável')
            
        } else if(choose.chooseIncome === '3'){
            console.log('despesas')
        }
    })
}

main()
/*
// Fixed income
entraces.addFixedIncome(painelFixedIncome,'Transporte', 300)
entraces.addFixedIncome(painelFixedIncome, 'Salario', 1200)
entraces.addFixedIncome(painelFixedIncome, 'Competição', 150)

// Variable income
entraces.addVariableIncome(incomeVariables, 'Serviço prestado', 300)
entraces.addVariableIncome(incomeVariables, 'Venda de Equipamentos', 150)

// Expenses
entraces.addExpense(expensesAll, 180, 'Restaurante')
entraces.addExpense(expensesAll, 57, 'Sei lá')

// Reports
functions.message()
functions.informationsFixedIncome(painelFixedIncome)
functions.viewIncomeVariable(incomeVariables)
functions.viewTotalIncome()
functions.viewExpenses(expensesAll)
functions.totalAll()
*/