
export const sountMount = [
    {
        name: 'source',
        description: 'Escreva da onde veio o dinheiro',
        pattern: /^[a-zA-Z\s\-]+$/,
        message: '[ERRO] tente novamente.',
        required: true
    },
    {
        name: 'amount',
        description: 'Coloque quanto você recebeu',
        message: '[ERRO] tente novamente.',
        pattern: /^\d+$/
    }

]


export const addMoreMountFixed = [
    {
    name: 'addMore',
    description: 'Você deseja adicionar mais itens? (1- Sim ou 2- Não)',
    pattern: /^[1-2]+$/,
    message: '[ERRO] Loop',
    required: true
    },
]

