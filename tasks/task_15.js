function func(arr, filter, transform){
    const filteredArr = arr.filter(filter)
    const transformationArr = filteredArr.map(transform)
    return transformationArr
  }
  
  func(
    [1,2,3,4], 
    (item) => item % 2 === 0,
    (item) => item *2
  )