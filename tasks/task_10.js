// Имеется массив с финансовыми переводами вида: [ { from: ‘Ivan’, to: ‘Oleg’, amount: 2500}, ...].
// Вычислить среднюю сумму всех переводов и 
// рассчитать для каждого объекта отклонение от среднего и записать в поле diff.
// Например, при средней сумме перевода в 2000 отклонение для перевода 
// { from: ‘Ivan’, to: ‘Oleg’, amount: 2500} будет составлять diff = 2500 - 2000 = 500;
//[{from: 'Ivan', to: 'Oleg', amount: 2500}, {from: 'Ivan', to: 'Igor', amount: 2000}, 
// {from: 'Oleg', to: 'Igor', amount: 1500}]


const users = [
  {from: 'Ivan', to: 'Oleg', amount: 2500}, 
  {from: 'Ivan', to: 'Igor', amount: 2000}, 
  {from: 'Oleg', to: 'Igor', amount: 1500}
]

const average = users.reduce((sum, item) => sum + item.amount, 0) / users.length

const res = users.map(item => ({
  ...item,
  diff: item.amount - average
}))

console.log(res)
