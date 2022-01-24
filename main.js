const number = +prompt('Введите число между 0 и 3', '1')
switch(number) {
  case 0 :
    alert('Вы ввели число 0');
    break;
}
switch(number) {
  case 1 :
    alert('Вы ввели число 1')
    break;
}
switch(number) {
  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3')
}
let x = 1;