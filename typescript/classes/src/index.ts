import {connection } from './database/connection'


function acessarSistema() {
  connection({ip: "198,3232.32.", name: "mysql"})
}


acessarSistema()