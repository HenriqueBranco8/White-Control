import chalk from "chalk"
const incomeFixed = [
    {
        name: "chooseIncome",
        description: chalk.white("Escolha a ferramenta (1- Renda fixa, 2 - Renda variável, 3 - Despesas)"),
        pattern: /^[1-3]+$/,
        message: chalk.red("Escolhga apenas entre 1, 2 ou 3"),
        require: true
    }

]

export default incomeFixed