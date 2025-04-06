
function megaSena(num) {
  if (num < 6 || num > 9) {
    console.log(`nao é possivel usar esse numero`)
    return []
  }

  const numeros = []


  while (numeros.length < num) {
    const numeroAleatorio = Math.floor(Math.random() * 60 + 1)
    if (!numeros.includes(numeroAleatorio)) {
      numeros.push(numeroAleatorio)
    }
  }
  return numeros
}


const numeroSorteado = megaSena(6)

console.log(numeroSorteado)