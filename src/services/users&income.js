const entraceIncome = async(painel, nameUser, fontsInput, price) => {
    return {
        painel,
        nameUser,
        fontsInput,
        price,
        totalFonts: () => price + price
    }
}

export default entraceIncome