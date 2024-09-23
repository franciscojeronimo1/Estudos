import 'core-js/stable';
import 'regenerator-runtime';

import Login from './modules/login'
import Cadastrocontato from './modules/cadastrocontato';



const cadastrocontato = new Cadastrocontato('.form-contato')
const register = new Cadastrocontato('.form-register')
const login = new Login('.form-login')
const cadastro = new Login('.form-cadastro')
login.init()
cadastro.init()
cadastrocontato.init()
//import './assets/css/style.css';

