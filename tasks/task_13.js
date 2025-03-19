function func(arr) {
    const storage = {
      string: () => console.log('its a string'),
      boolean: () => console.log('its a boolean'),
      number: () => console.log('its a number'),
      others: () => console.log('its a undefined meaning')
    }
    arr.forEach(item => {
      const handler = storage[typeof item] || storage.others
      handler()
    })
  }
  
  n = ['str', 123, '123', true, null, {}, 2]
  
  func(n)

function func(arr){
  let res = []
  return res = arr.map(item => `Its a ${typeof item}`)
}
n = ['str', 123, '123', true, null, {}, 2]
func(n)