// function Pokemon(nome, tipo){
//     this.nome = nome;
//     this.tipo = tipo;
// }

// const pikachu = new Pokemon("Pikachu", "elétrico");

class Pokemon {
    nome = '';
    tipo = '';
    constructor(nomeDoPokemon, tipoDoPokemon){
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque){
        console.log(`${this.nome} atacou com o ${nomeDoAtaque}`)
    }
}

const pikachu = new Pokemon('Pikachu', 'elétrico');
pikachu.atacar('choque do trovão')

console.log(pikachu);