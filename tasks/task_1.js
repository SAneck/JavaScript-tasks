// имеется массив объектов, хранящий список товаров с ценой и с остатком на складе
// используйте оператор map заполните новый массив суммарной стоимостью каждого товара 

const products = [
    {name: 'milk', price: 20, amount: 15}, 
    {name: 'coffee', price: 30, amount: 17}, 
    {name: 'tea', price: 10, amount: 13}
]

const sum = products.map(item => item.price * item.amount)

console.log(sum)
