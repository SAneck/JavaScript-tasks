function sortArr(arr, meaning) {
	if (meaning === 'NOT SORT') {
		return arr
	}

	if (meaning === 'ASC') {
		return arr.sort((a, b) => a - b)
	} else if (meaning === 'DESC') {
		return arr.sort((a, b) => b - a)
	}
}
const arr = [4, 5, 2, 4, 1, 5, 3]
sortArray(arr, 'ASC')
sortArray(arr, 'DESC')
