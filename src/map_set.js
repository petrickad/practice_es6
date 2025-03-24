let meuMap = new Map();
meuMap.set("nome", "petrick");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("sobrenomenome"));

// meuMap.clear();

console.log(meuMap.size);

for (let chave of meuMap.keys()){
    console.log(chave)
}
for (let valor of meuMap.values()){
    console.log(valor)
}

for (let [chave, valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`)
}

meuMap.delete('stack');

console.log(meuMap);

const cpfs = new Set();

cpfs.add('98745612312')

cpfs.add('78745612312')

cpfs.add('88745612312')

console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['Petrick ad', 'Raissa Souza', 'Lucio Qualfói', 'Luana giralda'];

const arraySet = new Set([...array]);

const arrayNoDuplicate = [...arraySet];

console.log(arrayNoDuplicate)