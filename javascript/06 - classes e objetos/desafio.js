//Comparando as idades de 2 pessoas

class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade}. Moro na cidade de ${this.cidade}`);
    }
}

function compararPessoa(person1, person2){
    if (person1.idade > person2.idade){
        console.log(`${person1.nome} é mais velho(a) que ${person2.nome}`);
    }else if (person2.idade > person1.idade){
        console.log(`${person2.nome} é mais velho(a) que ${person1.nome}`);
    }else{
        console.log('Os 2 tem a mesma idade');
    }
}

const person1 = new Pessoa('Jonas', 33);
const person2 = new Pessoa('Felipe', 33);

compararPessoa(person1, person2);
