/* eslint-disable   */

let nome: string = 'luiz';

let arrayDeNumeros: number[] = [1, 2 , 3];
let arrayDeStrings: Array<string> = ['a','b' ];

let pessoa: {nome: string, idade: number, adulto?: boolean } = {
  nome: 'catau',
  idade: 19

}

// any signfica qual quer coisa
function showMessage(msg: string) {
  return msg
}

console.log(showMessage('olá'))
