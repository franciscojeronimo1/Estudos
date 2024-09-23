import validator from "validator"

// Função que será chamada quando o comando for inválido
function exibirMensagemErro() {
    // Remover a classe d-none para que o parágrafo apareça
    document.getElementById('mensagemErro').classList.remove('d-none');
}

// Exemplo de como você poderia chamar essa função
// Quando o comando for inválido (substitua esta parte pelo seu código de verificação)
var comandoInvalido = true; // Exemplo


export default class cadastrocontato {
    constructor(formClass) {
        this.form = document.querySelector(formClass)
   
    }
         
    init() {
        this.events()
    }

    events() {
        if(!this.form) return
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.validate(e)
        })
    }
    validate(e) {
        const el = e.target
        const emailInput = el.querySelector('input[name="email"]')
        const nome = el.querySelector('input[name="nome"]')
        const tel = el.querySelector('input[name="telefone"]')
        let error = false

        if(!validator.isEmail(emailInput.value)) {
            exibirMensagemErro();
            error = true
        }

        if(nome.value.length < 3 || nome.value.length > 50) {
            exibirMensagemErro();
            error = true
        }

        if(!error) el.submit()

    }
}