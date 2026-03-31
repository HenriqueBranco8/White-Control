import * as entraces from './services/users&income.js'
import * as functions from './services/functions.mjs'

const painelFixedIncome = []
const incomeVariables = []

await entraces.entraceFixedIncome(painelFixedIncome,'Transoporte', 300)
await entraces.entraceFixedIncome(painelFixedIncome, 'Sario', 1200)

await incomes.variableMoney(incomeVariables, 30, 'Copa do Mundo')
await incomes.variableMoney(incomeVariables, 70, 'Celular')

await functions.viewIncomeVariable(incomeVariables)





