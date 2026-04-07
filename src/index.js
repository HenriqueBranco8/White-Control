import * as entraces from './services/users&income.js'
import * as functions from './services/functions.mjs'

const painelFixedIncome = []
const incomeVariables = []
const expensesAll = []

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