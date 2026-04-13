import prompt from "prompt"

const income = [
    {
        nome: "chooseIncome",
        description: "Escolha uma opção (1- Renda Fixa ou 2- Renda variável)",
        pattern: /^[1-2]+$/,
        message: "Escolha apenas 1 ou 2",
        required: true
    }

]

export default income