
// Utilizando o innerHTML, complete cada uma das frases dos elementos p que estão no arquivo HTML do template da aula.

const sapo = document.getElementById("sapo")
const poema = document.getElementById("poema")
const sabedoria = document.getElementById("sabedoria")
const borboleta = document.getElementById("borboleta")
const roberto = document.getElementById("roberto")

sapo.innerHTML += " pé"
poema.innerHTML += " evidências"
sabedoria.innerHTML += " voando"
borboleta.innerHTML += " pica-pau"
roberto.innerHTML += " vivi"

console.log(
    sapo,
    poema,
    sabedoria,
    borboleta,
    roberto
    )
