
// function logInfo(target: any) {
// console.log(target)
// }

// function LogInfo ( menssage: string) {
//  return ( target: any) => {
//   console.log(`${menssage}, ${target}`)
//  }
// }

// @LogInfo('servidor esta rodando')
// class Sistema {

// }


function setIpServidor(novoIp: string) {
  return(target: any) => {
    return class extends target {
      ip= novoIp
    }
  }
}

@setIpServidor('123.323.45.52')
class Servidor {

}

const servidor1 = new Servidor()

console.log(servidor1)