// Заполнить двумерный массив таблицей квадратов целых чисел от 0 до 100 и вывести её в удобочитаемом виде.

const size = 10;
const res = Array.from({ length: size }, (_, i) =>
  Array.from({ length: size }, (_, j) => {
    const number = i * 10 + j; 
    return `${number}^2 = ${number * number}`; 
  })
);
res.forEach((row, i) => {
  let rowString = i + "\t"; 
  rowString += row.join("\t");
  console.log(rowString);
});
