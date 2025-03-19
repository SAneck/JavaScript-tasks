// Заполнить двумерный массив таблицей умножения от 0 до 10 и вывести её в удобочитаемом виде.

const size = 11 
const res = Array.from( {length: size}, (_, i) => 
  Array.from( {length: size}, (_, j) => i * j )                   
)

for (let i = 0; i < size; i++){
  console.log(i + '\t' + res[i].join('\t'))
}
