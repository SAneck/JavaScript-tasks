// Имеется массив пользователей вида [{ name: “Ivan”, age: 24 }]. 
// Вывести суммарный возраст всех пользователей.
// [{name: 'Ivan', age: 24}, {name: 'Oleg', age: 16}, {name: 'Igor', age: 24}]) - 64

const arr = [{name: 'Ivan', age: 24}, {name: 'Oleg', age: 16}, {name: 'Igor', age: 24}]

const res = arr.reduce((sum, user) => sum + user.age, 0)
console.log(res)

let ress = 0
for(const user of arr){
    ress += user.age
}
