// Имеется массив пользователей вида [{ name: “Ivan”, age: 24 }]. 
// Вывести имена тех пользователей, возраст которых больше 18 лет.
// [{name: 'Ivan', age: 24}, {name: 'Oleg', age: 16}, {name: 'Igor', age: 24}] - [‘Ivan’, ‘Igor’]
	
const arr = [{name: 'Ivan', age: 24}, {name: 'Oleg', age: 16}, {name: 'Igor', age: 24}]

const res = arr.filter(item => item.age < 18)

console.log(res)
