const nomePetshop = "PETSHOP";

let pets = [
    {
    nome: 'Costelinha',
    tipo: 'Cachorro',
    idade: 5,
    raca: 'Vira-lata',
    peso: 3,
    tuor: 'Doug',
    contato: '(11) 98899-4545',
    vacinador: true,
    servicos: ['banho','tosa,']
    },
    {
    nome: 'Snoop',
    tipo: 'Cachorro',
    idade: 5,
    raca: 'Vira-lata',
    peso: 3,
    tuor: 'Doug',
    contato: '(11) 98899-4545',
    vacinador: true,
    servicos: ['banho']
    },
    {
    nome: 'Garfield',
    tipo: 'Gato',
    idade: 5,
    raca: 'Vira-lata',
    peso: 3,
    tuor: '',
    contato: '(11) 98899-4545',
    vacinador: true,
    servicos: ['banho','tosa,','cortar unhas']
    }
];

const listarPets = () => {
    for(let i = 0; i < pets.length; i ++){
        console.log(pets[i].nome);
    }
};

listarPets();