// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// Divisivel por 3 e 5 => FizzBuzz
// Não e divisivel por 3 ou 5 => entrada
// Não e um numero => 'Não e um numero'
const resultado = fizzbuzz(11);
console.log(resultado)

function fizzbuzz(entrada){
  if (typeof entrada !== 'number')
    return 'Não é um numero';
  if ((entrada % 3 === 0 && entrada % 5 === 0))
    return 'FizzBuzz'   
  if (entrada % 3 === 0)
    return 'Fizz';
  if (entrada % 5 === 0)
    return 'Buzz';      
 
  return entrada;  
}