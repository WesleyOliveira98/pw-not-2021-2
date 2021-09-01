const nums = [ 10, 19, 3, -4, 13, -11, 15, 0, -1 ]

// Encontrar o primeiro número negativo presente no vetor
const primeiroNeg = nums.find(x => x < 0)
console.log({primeiroNeg})

/*
  find() retorna o primeiro elemento que faça com que a função passada
  como parâmetro retorne true.
*/