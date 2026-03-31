import * as incomes from './services/users&income.js'
import * as functions from './services/functions.mjs'
const incomeVariables = []

await incomes.variableMoney(incomeVariables, 30, 'Copa do Mundo')
await incomes.variableMoney(incomeVariables, 70, 'Celular')
await functions.viewIncomeVariable(incomeVariables)