const sountMount = [
    {
        nome: 'fonte',
        description: 'Escreva da onde veio o dinheiro',
        pattern: /^[a-zA-Z\s\-]+$/,
        message: '[ERRO] tente novamente.',
        required: true
    },
    {
        nome: 'quantia',
        description: 'Coloque quanto você recebeu',
        message: '[ERRO] tente novamente.',
        pattern: /^\d+$/
    }
]


export default sountMount