function func(str) {
    const res = str.split(' ')
    const first_name = res[0]
    const last_name = res[1]
    const patronymic_name = res[2]
    return {first_name: first_name, last_name: last_name, patronymic_name: patronymic_name}
  }
  
func('Иванов Пётр Андреевич')

function func(str) {
    const [last_name, first_name, patronymic_name] = str.trim().split(/\s+/)
    return { first_name, last_name, patronymic_name }
  }
  
func('Иванов Пётр Андреевич')