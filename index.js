const nomePetshop = "PETSHOP";
var moment = require('moment'); // require
const dadosPet = require('./dadosPet.json');

let pets = dadosPet.pets;

const listarPets = () => {
    for(let pet of pets){
        console.log(`O nome do pet é ${pet.nome}, Idade: ${pet.idade}, Tipo: ${pet.tipo}, Raça: ${pet.raca}, Serviços: `);

        for (const servico of pet.servicos) {
            console.log(`${servico.tipoServ} - ${servico.dataServico}`);
        };
    };
};

const vacinarPet = (petNome) => {
    let pet = pets.find(findPet => findPet.nome == petNome);

    if(pet.vacinado == false){
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso!`);
    }
    else{
         console.log(`Ops, ${pet.nome} já está vacinado!`);
    };
};

const campanhaVacina = () => {
    let qtVacinados = 0;
    for(let pet of pets){
        if(pet.vacinado == false){
            pet.vacinado = true;
            qtVacinados ++;
        };
    };
    console.log(`${qtVacinados} pets foram vacinados nessa campanha!`);
};

const adicionarPet = () => {
    let pet =
        {
            nome: 'Bolt',
            tipo: 'Cachorro',
            idade: 10,
            raca: 'Bolt',
            peso: 2,
            tutor: 'Ângelo',
            contato: '(81) 11111-1111',
            vacinado: false  
        };

    pets.push(pet);
};

const darBanhoPet = (petNome) => {
    let pet = pets.find(findPet => findPet.nome == petNome);

    pet.servicos.push({
        tipoServ: 'banho',
        dataServico: moment().format("DD/MM/YYYY")   
    });

    console.log(`${pet.nome} está de banho tomado!`);
};

const tosarPet = (petNome) => {
    let pet = pets.find(findPet => findPet.nome == petNome);

    pet.servicos.push({
        tipoServ: 'tosa',
        dataServico: moment().format("DD/MM/YYYY")      
    });

    console.log(`${pet.nome} está com cabelinho na régua`);
};

const apararUnhasPet = (petNome) => {
    let pet = pets.find(findPet => findPet.nome == petNome);

    pet.servicos.push({ 
        tipoServ: 'corte de unhas',
        dataServico: moment().format("DD/MM/YYYY")
    });
   
    console.log(`${pet.nome} está de unhas aparadas!`); 
}

apararUnhasPet(petNome = 'Snoop');
listarPets();