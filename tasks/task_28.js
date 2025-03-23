function updateUser(user, changes) {
	return { ...user, ...changes }
}

const user = {
	id: 123,
	first_name: 'Ivan',
	last_name: 'Ivanov',
	password: 'Mypwd!23',
	age: 13,
}

const changes = {
	age: 15,
	password: 'new password',
}

const updatedUser = updateUser(user, changes)
console.log(updatedUser)
