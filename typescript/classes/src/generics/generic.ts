


function repositorio<T extends string | number >() {
  let dados: T;

  function getDados() {
    return dados;
  }

  function setDados (novoDado: T) {
    dados= novoDado
  }

  return{ getDados, setDados}

}

const repo1 = repositorio<string | number>();

repo1.setDados(15)

repo1.setDados('15')

const repo2 = repositorio <string>();

repo2.setDados("25")

console.log(repo2.getDados())