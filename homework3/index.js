// alert('Exercise 1');
// const password = "пароль";
// let userPassword = String(prompt(`Enter your password: `));
// password === userPassword
//   ? alert("Пароль введен верно")
//   : alert("Пароль введен неправильно");

// alert('Exercise 2');
// const c = Number(prompt(`Введите число: `));
// if (isNaN(c)) {
//   console.log(`Вы ввели не число`);
// } else {
//   c > 0 && c < 10 ? console.log("Верно") : console.log("Неверно");
// }

// alert('Exercise 3');
// const d = Number(prompt(`Введите первое число: `));
// const e = Number(prompt(`Введите второе число: `));
// if (isNaN(d) || isNaN(e)) {
//   console.log(`Вы ввели не число`);
// } else {
//   d > 100 || e > 100 ? console.log("Верно") : console.log("Неверно");
// }

// alert('Exercise 4');
// let a = '2';
// let b = '3';
// // Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже:
// alert(Number(a) + Number(b));

// alert('Exercise 5');
// const monthNumber = Number(prompt(`Введите номер месяца: `));
// if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
//   console.log(`Вы ввели некорректный номер месяца`);
// } else {
//   switch (monthNumber) {
//     case 1:
//     case 2:
//     case 12:
//       console.log(`Winter`);
//       break;
//     case 3:
//     case 4:
//     case 5:
//       console.log(`Spring`);
//       break;
//     case 6:
//     case 7:
//     case 8:
//       console.log(`Summer`);
//       break;
//     case 9:
//     case 10:
//     case 11:
//       console.log(`Autumn`);
//       break;
//     default:
//       break;
//   }
// }

// alert('Exercise 6');

// alert('Exercise 7');
// const userNumber = Number(prompt(`Введите любое число: `));
// if (isNaN(userNumber)) {
//   console.log(`Вы ввели не число`);
// } else {
//   userNumber % 2 ? console.log("Число нечетное") : console.log("Число четное");
// }

// alert('Exercise 8,9');
// const clientOS = Number(prompt(`Выберите платформу. iOS - 0, Андроид - 1`));
// const clientDeviceYear = Number(prompt(`Укажите год выпуска вашего телефона`));
// let light = ``;
// if (clientDeviceYear < 2015) {
//   light = ` облегченную`;
// }

// switch (clientOS) {
//   case 0:
//     console.log(`Установите${light} версию приложения для iOS по ссылке`);
//     break;
//   case 1:
//     console.log(`Установите${light} версию приложения для Android по ссылке`);
//     break;
//   default:
//     console.log(`Вы ввели некорректное число`);
//     break;
// }

// alert('Exercise 9');

// alert('Exercise 10');
