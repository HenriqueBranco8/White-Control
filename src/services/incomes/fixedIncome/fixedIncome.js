import prompt from "prompt"
import {sountMount, addMoreMountFixed} from "./handle.js"
import { addFixedIncome } from "../../users&income.js"
import { informationsFixedIncome } from "./functionsFixedIncome.js"

const painelFixedIncome = []

const add = (callback) => {
    prompt.get(sountMount, (err, result) => {
    if(err){
        console.log('[ERRO] PAINEL RENDA FIXA [ERRO]')
    }
    else{
        addFixedIncome(painelFixedIncome, result.source, result.amount)
        informationsFixedIncome(painelFixedIncome)
        callback()
    }

    })
}

const feito = () => {
    prompt.get(addMoreMountFixed, (err, result) => {
        if(err){
            console.log('[ERRO]')
        } else {
            if(result.addMore === '1'){
                add()
            } else if(result.addMore === '2'){
                console.log('Acabou')
            }
        }
    })
}


const teste = () => {
    add(() => feito())
}

export default teste




