import chalk from "chalk";


//View fixed income
let totalFixedIncome = 0

const informationsFixedIncome = (fixedIncomeList) => {
    fixedIncomeList.forEach((item) => {
        totalFixedIncome += item.amount
        console.log(
            `Fonte: ${item.source},`,
            chalk.greenBright(`R$:${item.amount}`)
        )
    }); 

    console.log(`Total renda fixa: R$${totalFixedIncome}`)
}

export {
    informationsFixedIncome,
}