const sountMount = [
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


export default sountMount