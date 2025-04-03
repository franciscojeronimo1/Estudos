
let listElement = document.querySelector("#app ul")
let inputElement = document.querySelector("#app input")
let buttonElement = document.querySelector("#app button")

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || []



function renderTarefas() {
  listElement.innerHTML = ""

  tarefas.map((todo) => {
    let liElement = document.createElement("li")
    let tarafaText = document.createTextNode(todo)

    let linkElement = document.createElement("a")
    linkElement.setAttribute("href", "#")

    let linkText = document.createTextNode(" Excluir")
    linkElement.appendChild(linkText)

    let posicao = tarefas.indexOf(todo)

    linkElement.setAttribute("onclick", `deletarTarefas(${posicao})`)

    liElement.appendChild(tarafaText)
    liElement.appendChild(linkElement)
    listElement.appendChild(liElement)
  })
}
renderTarefas()


function adicionarTarefas() {
  if (inputElement.value === '') {
    alert("Digite alguma tarefa")
    return false
  } else {
    let novaTarefas = inputElement.value

    tarefas.push(novaTarefas)
    inputElement.value = ''

    renderTarefas()
    salvarDados()
  }
}

buttonElement.onclick = adicionarTarefas

function deletarTarefas(posicao) {
  tarefas.splice(posicao, 1)
  renderTarefas()
  salvarDados()
}

function salvarDados() {
  localStorage.setItem("@listaTarefas", JSON.stringify(tarefas))
}