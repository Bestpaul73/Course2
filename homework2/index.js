alert('Exercise 1');
let aa = 10;
alert(aa);
aa = 20;
alert(aa);

alert('Exercise 2');
const firstIphoneBD = 2007;
alert(firstIphoneBD);

alert('Exercise 3');
const creatorJS = 'Brendan Eich';
alert(creatorJS);

alert('Exercise 4');
const x1 = 10;
const x2 = 2;
alert(`Сумма ${x1} и ${x2} равна ${x1 + x2}`);
alert(`Разница ${x1} и ${x2} равна ${x1 - x2}`);
alert(`Произведение ${x1} и ${x2} равно ${x1 * x2}`);
alert(`Частное ${x1} и ${x2} равно ${x1 / x2}`);

alert('Exercise 5');
const result = 2 ** 5;
alert(result);

alert('Exercise 6');
const a = 9;
const b = 2;
alert(`Остаток от деления ${a} на ${b} равен ${a % b}`);

alert('Exercise 7');
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

alert('Exercise 8');
const age = Number(prompt(`Сколько вам лет?`));
alert(age);

alert('Exercise 9.0');
const user = {
	name: 'Bob',
	age: 33,
	isAdmin: false,
}
user['city of residence'] = 'Florida';
user.age = 34;
delete user['city of residence'];
const info = prompt(`Какую информацию хотите узнать о пользователе ${user.name}?`);
alert(`${user.name}'s ${info} - ${user[info]}`);

alert('Exercise 10');
const userName = String(prompt('What is your name?'));
alert(`Привет, ${userName}!`);