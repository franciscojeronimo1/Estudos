
function cadastro(email: string, senha:string , nome = 'aluno', idade?: number): void {
  let data = {email, senha, nome}

  console.log(data)
}

cadastro('teset@teste.com', '1232', )


function nomes(...nome:string[]) {
  nome.map(nome => {
    console.log(nome)
  })
}

nomes('joao','maria','fernando')