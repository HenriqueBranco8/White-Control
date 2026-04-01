import * as entraces from './services/users&income.js'
import * as functions from './services/functions.mjs'

const painelFixedIncome = []


await entraces.entraceFixedIncome(painelFixedIncome,'Transoporte', 300)
await entraces.entraceFixedIncome(painelFixedIncome, 'Sario', 1200)
await entraces.entraceFixedIncome(painelFixedIncome, 'Competição', 150)

const message = await functions.message()
const relatorio = await functions.informationsFixedIncome(painelFixedIncome)







