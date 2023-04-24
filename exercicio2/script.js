// 1 - Escreva um código que capture os valores dos inputs do arquivo HTML, 

//2 - imprima estes valores no console, 

//3 - e em seguida, limpe os inputs

const nome = document.getElementById("nome")
console.log("antes:", nome.value)
nome.value = ""
console.log("depois:", nome.value)

const endereco = document.getElementById("endereco")
console.log(endereco.value)
endereco.value = ""

const email = document.getElementById("email")
console.log(email.value)
email.value = ""


// const nomeDaVariavel = document.
