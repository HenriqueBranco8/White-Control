import entraceIncome from './services/users&income.js'
import * as functions from './services/functions.mjs'

const painelMain = []

const paine = await entraceIncome('painelMain', 'Henrique', 'Ifood', 500)

const teste = functions.lookingInfos(paine)

console.log(teste)


