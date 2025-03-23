const twoDimensionalArray = [
	[1, 2],
	[3, 4],
	[5, 6],
]

const association = []

for (let i = 0; i < twoDimensionalArray.length; i++) {
	for (let j = 0; j < twoDimensionalArray[i].length; j++) {
		association.push(twoDimensionalArray[i][j])
	}
}

console.log(association)
