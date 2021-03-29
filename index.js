const nomePetshop = "PETSHOP";
const moment = require('moment'); // require
const fs = require('fs');
let dadosPets = fs.readFileSync('./dadosPets.json');

let dados = JSON.parse(dadosPets);

const attDados = () => {
    let petsAtt = JSON.stringify(dados, null, 2);

    fs.writeFileSync('dadosPets.json', petsAtt, 'utf-8');
};

const listarPets = () => {
    attDados();
    for(let pet of dados.pets){
        console.log(`O nome do pet é ${pet.nome}, Idade: ${pet.idade}, Tipo: ${pet.tipo}, Raça: ${pet.raca}, Serviços: `);

        for (const servico of pet.servicos) {
            console.log(`${servico.tipoServ} - ${servico.dataServico}`);
        };
    };
};

const vacinarPet = (petNome) => {
    let pet = dados.pets.find(findPet => findPet.nome == petNome);

    if(pet.vacinado == false){
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso!`);
    }
    else{
         console.log(`Ops, ${pet.nome} já está vacinado!`);
    };
    attDados();
};

const campanhaVacina = () => {
    let qtVacinados = 0;
    for(let pet of dados.pets){
        if(pet.vacinado == false){
            pet.vacinado = true;
            qtVacinados ++;
        };
    };
    console.log(`${qtVacinados} dados.pets foram vacinados nessa campanha!`);
};

const adicionarPet = () => {
    let novoPet =
        {
            nome: 'Bolt',
            tipo: 'Cachorro',
            idade: 10,
            raca: 'Kryptoniano',
            peso: 2,
            tutor: 'Ângelo',
            contato: '(81) 11111-1111',
            vacinado: false  
        };

    dados.pets.push(novoPet);
    attDados();
    console.log(`${novoPet.nome} foi adicionado com sucesso!`);
};

const darBanhoPet = (petNome) => {
    let pet = dados.pets.find(findPet => findPet.nome == petNome);

    pet.servicos.push({
        tipoServ: 'banho',
        dataServico: moment().format("DD/MM/YYYY")   
    });

    console.log(`${pet.nome} está de banho tomado!`);
};

const tosarPet = (petNome) => {
    let pet = dados.pets.find(findPet => findPet.nome == petNome);

    pet.servicos.push({
        tipoServ: 'tosa',
        dataServico: moment().format("DD/MM/YYYY")      
    });

    console.log(`${pet.nome} está com cabelinho na régua`);
};

const apararUnhasPet = (petNome) => {
    let pet = dados.pets.find(findPet => findPet.nome == petNome);

    pet.servicos.push({ 
        tipoServ: 'corte de unhas',
        dataServico: moment().format("DD/MM/YYYY")
    });
   
    console.log(`${pet.nome} está de unhas aparadas!`); 
};

//apararUnhasPet(petNome = 'Snoop');
//listarPets();
//adicionarPet();