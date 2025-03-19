//rest

function somar(a, b){
    let soma = 0;
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }   
    return soma;
}

console.log(somar(10, 20, 30, 40));

function somarComRest(...numeros){
    const soma = numeros.reduce((total, numeroAtual) =>{
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}
console.log(somarComRest(10, 20, 30));

//spread
const numeros = [1, 2, 3, 4]
console.log(...numeros);

const timesDeFutebolDeSp = ['santos', 'palmeiras', 'bragantino', 'são paulo'];
const timeDeFutebolDeRj = ['vasco', 'botafogo', 'flamengo', 'fluminense'];

// const todosOsTimes = timesDeFutebolDeSp.concat(timeDeFutebolDeRj);
const timesDeFutebol = [...timesDeFutebolDeSp, ...timeDeFutebolDeRj];
console.log(timesDeFutebol);

const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna)

//desestruturação

// const motorDoCarroDaAna = carroDaAna.motor;

const { motor: motorDoCarroDaAna } = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia;

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;

console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia);

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);