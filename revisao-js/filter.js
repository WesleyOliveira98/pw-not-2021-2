const nums = [ 31, 42, 16, 12, 23, 9, 28, 33, 36 ]

// Gerar um segundo vetor contendo apenas os números PARES
// do vetor nums

const pares = []

for(let n of nums) {
  if(n % 2 === 0) pares.push(n)
}
console.log({pares})

/*
  filter() gera um novo vetor contendo o resultado de uma função (passada
  a ele como parâmetro) aplicada a cada elemento. Apenas os elementos para
  os quais a função retornar true passam para o novo vetor.

  A quantidade de elementos do novo vetor (vetor filtrado) varia entre 0 e
  n, onde n é a quantidade de elementos do vetor original.
*/
const pares2 = nums.filter(i => i % 2 === 0)
console.log({pares2})
