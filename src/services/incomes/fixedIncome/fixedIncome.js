import prompt from "prompt"
import sountMount from "./handle.js"
import { addFixedIncome } from "../../users&income.js"
import { informationsFixedIncome } from "../../functions.mjs"

const painelFixedIncome = []

const teste = () => {
    prompt.get(sountMount, (err, result) => {
        if(err){
            console.log('[ERRO] PAINEL RENDA FIXA [ERRO]')
        }
        else{
            
            addFixedIncome(painelFixedIncome, result.source, result.amount)
            informationsFixedIncome(painelFixedIncome)
            
        }

    })
}

export default teste




