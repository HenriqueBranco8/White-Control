import prompt from "prompt"
import sountMount from "./handle.js"
import { informationsFixedIncome } from "../../functions.mjs"
import { addFixedIncome } from "../../users&income.js"

const painelFixedIncome = []

const teste = () => {
    prompt.get(sountMount, (err, result) => {
        if(err){
            console.log('[ERRO] PAINEL RENDA FIXA [ERRO]')
        } 
        addFixedIncome(painelFixedIncome, result.fonte, result.quantia)
        informationsFixedIncome(painelFixedIncome)
        
    })
    
}

export default teste




