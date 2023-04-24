
// 1. A partir do template, crie um código que leia o valor innerHTML do elemento P que está na página.

const paragrafo = document.getElementById("paragrafo")
console.log(paragrafo.innerHTML)

// 2. Depois disso, Utilize o input que está na página para digitar um novo valor, e a cada vez que um caractere for digitado, imprima no console o valor atual do input.
const input = document.getElementById("texto")

function pegarTextoDoInput () {
   console.log(input.value)
}

// 3. Crie um botão, e neste botão adicione um evento que, ao ser clicado, substitua o valor do elemento P pelo valor que está no input.

function substituirTextoDoParagrafo(){
    paragrafo.innerHTML = input.value
}