const readlineSync = require('readline-sync');
const dob = readlineSync.question('Введите дату рождения (в формате ГГГГ-ММ-ДД): ');

const birthDate = new Date(dob);
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();

const hasHadBirthday =
  today.getMonth() > birthDate.getMonth() ||
  (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

if (!hasHadBirthday) {
  age--;
}

console.log(`Ваш возраст: ${age} лет`);