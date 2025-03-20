function func(array, start, end){
    for (let i = start; i < array.length; i++) {
      if(i <= end){
          console.log(array[i]);
      }
    }
  }
  
func([13, 14, 32, 23, 34, 21, 44, 47, 86], 4, 6)

function func(arr, start, end){
  const zxc = arr.filter((item, index) => start <= index && index <= end)
  return zxc
}

func([13, 14, 32, 23, 34, 21, 44, 47, 86], 4, 6)