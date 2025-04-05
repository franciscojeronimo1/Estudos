// function containsValue(array, value) {
//   return array.includes(value);
// }

// // Exemplo de uso
// const lista = [1, 2, 3, 4, 5];
// console.log(containsValue(lista, 3)); // Saida: true
// console.log(containsValue(lista, 10)); 

const products = [
  { name: 'Maça', price: 2.5 },
  { name: 'Coca cola', price: 8 },
  { name: 'Guarana', price: 5 },
  { name: 'Chocolate', price: 20 }
];

const checkProduct = products.find((product) => product.price === 20);

console.log(checkProduct);


const product = products.filter((product) => product.price < 8);

console.log(product); 