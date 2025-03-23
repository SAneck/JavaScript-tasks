function snakeToCamel(str) {
	const separation = str.split('_')
	let camelCaseStr = separation[0]
	for (let i = 1; i < separation.length; i++) {
		camelCaseStr += separation[i][0].toUpperCase() + separation[i].slice(1)
	}

	return camelCaseStr
}

snakeToCamel('find_and_replace_element_of_array')
