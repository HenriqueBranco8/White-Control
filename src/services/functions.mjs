//Add user on painel main
const displayPainel = async(painel) => {
    painel.forEach((item, index) => {
        console.log(`${index + 1} : ${item.name}`)
    });
}

const lookingInfos = async (painel) => {
    Object.keys(obj).forEach((item) => {
        console.log(`${item.nameUser}`)
    })
}

const addInforns = async (painel, nameUser, fontsInput, price) => {
    painel.push(nameUser, fontsInput, price)
}


export {
    displayPainel,
    addInforns,
    lookingInfos, 
}