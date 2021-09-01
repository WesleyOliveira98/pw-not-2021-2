const carros = ['Corcel', 'Chevette', 'Opala', 'Fusca', 'Brasília', 'Spazio']

console.log('Tem Opala?', carros.includes('Opala'))
console.log('Tem Belina?', carros.includes('Belina'))

/*
  includes() retorna true caso o argumento passado exista no vetor
  ou false, caso contrário.
*/