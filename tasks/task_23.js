const arr = ['aaa', 'bbb', 'ccc', 'aaa', 'bbb', '', 'aaa']

let counter = {}

arr.forEach(item => {
	if (counter[item]) {
		counter[item] += 1
	} else {
		counter[item] = 1
	}
})

for (const key in counter) {
	console.log(key + ' ' + counter[key])
}
