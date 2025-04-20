
type Connection = {
  ip: string;
  name: string;
}

export function connection(info: Connection): boolean {
  console.log('CONEXAO REALIZADA COM SUCESSO: ', info.ip)
  return true
}