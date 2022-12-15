//Objetos

const felipe = {
    nome: 'Felipe Paiva',
    idade: 37,
    endereco: 'Rua Felipe Camarão',
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
}

felipe.descrever();

console.log(felipe);
console.log(felipe.endereco);

console.log(felipe['nome'] = 'Joaozinho');
console.log(felipe);


//Classes

class Pessoas {
    nome;
    idade;
    cidade;

    constructor(nome, idade, cidade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
        this.cidade = cidade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade}. Moro na cidade de ${this.cidade}`);
    }
}

const felipeP = new Pessoas('Felipe Paiva', 37, 'Petropolis');

console.log(felipeP);

felipeP.descrever();


