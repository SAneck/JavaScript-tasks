// Имеется массив пользователей вида [{ name: “Ivan”, age: 24 }].
// Рассчитать минимальный и максимальный возраст всех пользователей. 
// Результат записать в объект вида { min: …, max: … }
//[{name: 'Ivan', age: 24}, {name: 'Oleg', age: 16}, {name: 'Igor', age: 22}] - {min: 16, max: 24}

const users = [
  {name: 'Ivan', age: 24}, 
  {name: 'Oleg', age: 16}, 
  {name: 'Igor', age: 22}
] 

const res = users.map(item => item.age)

const max = Math.max(...res)
const min = Math.min(...res)

maxmin = {max: max, min: min}

console.log(maxmin)
