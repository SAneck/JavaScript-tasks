const user = {
	id: 123,
	first_name: 'Ivan',
	last_name: 'Ivanov',
	password: 'new password',
	age: 15,
}

const { first_name: firstName, last_name: lastName } = user

console.log(firstName)
console.log(lastName)
