let vetor = [10, 20, 30]

let obj = {
    nome: 'Cilada',
    idade: 69,
    naturalidade: 'Pindamonhangaba/MG'
}

// Desestruturação de vetor: as variaveis do let podem ter qualquer nome
let [x, y, z] = vetor
console.log(x)
console.log(y)
console.log(z)

// Desestruturação de objeto: as variaveis DEVEM ter os mesmos nomes
// das propriedades, não importa a ordem
let {naturalidade, nome, idade} = obj
console.log(nome)
console.log(naturalidade)
console.log(idade)

let obj2 = {
    marca: 'Volksvagem',
    modelo: 'Passat',
    ano: 1969,
    cor: 'Verde Musgo'
}

// Desestruturação parcial do Objeto:
let {modelo, ano, cor} = obj2
console.log(modelo)
console.log(cor)
console.log(ano)

let vet2 = ['banana', 'acerola', 'pessego', 'abacaxi']

// Não da certo: Desestruturação parcial de vetor
// let []undefined, fruta2, undefined]
// console.log(fruta2)

let [fruta1, fruta2,, fruta4] = vet2
console.log(fruta2)
console.log(fruta4)
console.log(fruta1)