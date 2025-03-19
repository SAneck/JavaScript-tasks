// Написать функцию, принимающую массив строк и выводящих их на экран,
// используя цикл while. Элементы из массива извлекать с помощью оператора .pop()

function func(arr){
    while (arr.length > 0){
      console.log(arr.pop())
    }
  }
  
  arr = ['zxc','asd','qwe','www']
  
  func(arr)
  