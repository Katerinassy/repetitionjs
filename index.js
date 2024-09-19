//1
//alert("Я JavaScript")

//2
//let name = "Ivan"
//let admin = name
//alert(admin)

//3
// let name = "Ilya";
// alert( `hello ${1}` ); // ?
// alert( `hello ${"name"}` ); // ?
// alert( `hello ${name}` ); // ?

// 4
// let name = prompt("Как тебя Зовут?", '')
// alert(`Меня зовут ${name}`)

// 5
// let a = 1, b = 1;
// let c = ++a; // ?
// let d = b++; // ?
// alert(c)
// alert(d)

//6 
// let a = 2;
// let x = 1 + (a *= 2);
// alert(x)

//7
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(Number(a) + Number(b));

// //8
// let a = 7, b = 5;
// let c = "стол", d = "стул";
// let x = 4, z = 52;
// e = a > b;
// u = c > d;
// p = x >z;

// undefined == null;
// undefined === null;
// null == "\n0\n";
// null === +"\n0\n"; //=== - строгое значение
// alert(e); //True
// alert(u); //False
// alert(p); //False


//9
// if ("0") {
//     alert( 'Привет' );
//   }
//ВЫВЕДИТЬСЯ ПРИВЕТ

//10
// let answer = prompt("Какое «официальное» название JavaScript?");
// if (answer === "ECMAScript") {
//   alert("Верно!");
// } else {
//   alert("Не знаете? ECMAScript!");
// }

//11
// let num = parseInt(prompt("Enter a number: "));

// if (num > 0) {
//   alert(1);
// } else if (num < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

//12
// let a = 1
// let b = 2
// result = (a + b < 4) ? 'Мало' : 'Много';
// alert(result)
// let result;
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
// result = (a + b < 4) ? 'Мало' : 'Много';

//13
// let a = prompt("должность");

// let tittle = a == "Сотрудник" ?
//     "Привет" :
//     a == "Директор" ?
//     "Здравстуйте" :
//     (a = "") ? "нет логина" : "Введите дол"


// alert(tittle)

//14
// alert(null || 4 || undefined);

// //15
// alert(alert(1) || 2 || alert(3));
// //16
// alert( 1 && null && 2 );
// //17
// alert( alert(1) && alert(2) );
// //18
// alert( null || 2 && 3 || 4 );
// //19
// let value = NaN;

// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;

// alert(value);

//20
// let age = prompt("Введите число")
// if ((age >= 14) && (age <= 90)) {
//     alert("Вашe число входит в диапозон 14 - 90")
// } else {
//     alert("Не входит в диапозон")
// }
//21
// let age = parseInt(prompt("Введите число"));
// if (!(age >= 17 && age <= 99)) {
//     alert("Ваше число НЕ входит в диапазон 17 - 99");
// } else {
//     alert("Ваше число входит в диапазон 17 - 99");
// }
// // второе вариант решение
// let age = parseInt(prompt("Введите число"));
// if (age < 17 || age > 99) {
//   alert("Ваше число НЕ входит в диапазон 17 - 99");
// } else {
//   alert("Ваше число входит в диапазон 17 - 99");
// }
// 
// //22
// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );

//23
// let login = prompt("Введите логин");

// if (login === "Админ") {
//     let password = prompt("Введите пароль");
//     if (password === null || password === "") {
//         alert("Отменено");
//     } else if (password === "Я главный") {
//         alert("Здравствуйте!");
//     } else {
//         alert("Неверный пароль");
//     }
// } else if (login === null || login === "") {
//     alert("Отменено");
// } else {
//     alert("Я вас не знаю");
// }