import * as entraces from './services/users&income.js'
import * as functions from './services/functions.mjs'

const painelFixedIncome = []
const incomeVariables = []

//itens what it are on array Income Fixed
await entraces.entraceFixedIncome(painelFixedIncome,'Transoporte', 300)
await entraces.entraceFixedIncome(painelFixedIncome, 'Sario', 1200)
await entraces.entraceFixedIncome(painelFixedIncome, 'Competição', 150)

//itens what it are on array Income variable
await entraces.variableMoney(incomeVariables, 'Serviço prestado', 300)
await entraces.variableMoney(incomeVariables, 'Venda de Equipamentos', 250)

//Report and menssagens of system
await functions.message()
await functions.informationsFixedIncome(painelFixedIncome)
await functions.viewIncomeVariable(incomeVariables)





