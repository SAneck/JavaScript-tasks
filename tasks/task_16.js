function func(numberPhone){
    if(numberPhone.length !== 11){
      return console.log('no!')
    }  
    const first = numberPhone[0]
    const second = numberPhone.slice(1, 4)
    const third = numberPhone.slice(4, 7)
    const fourth = numberPhone.slice(7,9)
    const fifth = numberPhone.slice(9,11)
  
    return `${first}-(${second}) ${third}-${fourth}-${fifth}`
  }
  
  func('88005553535')