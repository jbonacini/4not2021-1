// Criando um objeto cujo valor das propriedades vem
// de variaveis

let usuario = 'Bonacini'
let senha = 'Tmj123'
let name = 'João das Couves'
let lastLogin = '2021-02-09 21:52:36'

let userInfo = {
    login: usuario,
    password: senha,
    name, // Propriedade abreviada (name: name)
    lastLogin // (lastLogin: lastLogin)
}

console.log(userInfo)

let info = 'Isto é só um teste praga'
console.log(info)
console.log({info})
