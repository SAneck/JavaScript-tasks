function func(obj){
    const [first, second, three] =  Object.values(obj)
    return first + ' ' + second + ' ' + 'E-mail: ' + three
}
  const obj = { first_name: 'Ivan', last_name: 'Ivanov', email: 'ivanov@pochta.com' }
func(obj)
  
function func({first_name, last_name, email}){
    return `${first_name} ${last_name} + E-mail: ${email}`
}
  const obje = { first_name: 'Ivan', last_name: 'Ivanov', email: 'ivanov@pochta.com' }
func(obje)