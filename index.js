// ime = prompt("Unesite ime");

// console.log(ime);

// a = parseInt(prompt("unesi 1.stranicu"));
// b = parseInt(prompt("unesi 2.stranicu"));
// c = parseInt(prompt("unesi 3.stranicu"));

// a = 3;
// b = 1;
// c = 5;
// if (a + b > c && a + c > b && b + c > a) {
//   console.log("Trougao je moguc");
// } else {
//   console.log("Nije moguc");
// }

// if (a + b < c) {
//   console.log("trougao nije validan");
// } else if (a + c < b) {
//   console.log("trougao nije validan");
// } else if (b + c < a) {
//   console.log("trougao nije validan");
// } else {
//   console.log("trougao je validan");
// }

// a = 3;
// b = 5;
// c = 5;

// if (a >= b && a >= c) {
//   console.log("a je najvece");
// } else if (b >= a && b >= c) {
//   console.log("b je najvece");
// } else if (c >= a && c >= b) {
//   console.log("c je najvece");
// }

// if (a > b) {
//   if (a > c) {
//     console.log("a je najveci");
//   } else if (c > b) {
//     console.log("c je najveci");
//   }
// } else {
//   if (b > c) {
//     console.log("b je najveci");
//   } else if (c > a) {
//     console.log("c je najveci");
//   }
// }

// broj = 100;

// if (broj % 4 === 0) {
//   console.log("Prestupna");
// } else if (broj % 100 === 0 && broj % 400 === 0) {
//   console.log("Prestupna");
// } else {
//   console.log("Normalna");
// }

// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(null));

// p1 = -87;
// p2 = -75;
// p3 = 7000000;

// p = (p1 + p2 + p3) / 3;

// if (p <= 0 || p >= 100) {
//   console.log("Neispravan unos");
// } else if (p < 60) {
//   console.log("F");
// } else if (p < 70) {
//   console.log("D");
// } else if (p < 80) {
//   console.log("C");
// } else if (p < 90) {
//   console.log("B");
// } else if (p < 100) {
//   console.log("A");
// }

// var1 = Number(prompt("uneste rpvi broj:"));

// if (var1 || var1 === 0) {
//   console.log("Broj je", var1);
// } else {
//   console.log("Niste uneli broj");
// }

// switch (6) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Wrong num");
//     break;
// }

// dayNum = 5;
// console.log(dayNum);

// switch (dayNum) {
//   case 2 || 3:
//     console.log("Priv drugidan");
//     break;
//   case 4 || 5:
//     //   case 5:
//     console.log("Soon it is Weekend");
//     break;
//   case 0:
//   case 6:
//     console.log("It is Weekend");
//     break;
//   default:
//     console.log("Looking forward to the Weekend");
// }

// points = 55987;
// switch (true) {
//   case points >= 0 && points < 50:
//     console.log("F");
//     break;

//   case points < 60:
//     console.log("D");
//     break;

//   default:
//     console.log("nesto");
//     break;
// }

// for (let i = 1; i <= 365; i = i + 7) {
//   console.log("Dan broj: ", i, "ponedeljak");
// }

// for (let i = 0; i < 10; i++) {
//   if (i > 6) {
//     break;
//   }

//   console.log(i);
// }

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log("Hello world");
//   }
// }

// broj = 32;

// for (i = 0; i <= broj; i++) {
//   if (broj % i === 0) {
//     console.log(i);
//   }
// }
// sifra = "daris";
// unos = prompt("Unesi sifru");

// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

// i = 0;
// while (true) {
//   if (i > 10) {
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// korisnik = "";

// while (korisnik !== "sifra") {
//   korisnik = prompt("Unesite sifru!");
// }

// console.log("Tacna sifra!!!");

// korisnik = "";
// while (true) {
//   if (korisnik === "sifra") {
//     break;
//   }
//   korisnik = prompt("Unesite sifru");
// }

// console.log("TACNO!!");

// broj = undefined;

// while (true) {
//   if (broj === 0) {
//     alert("Izasli ste iz programa");
//     break;
//   } else if (broj === 17) {
//     alert("Dali ste tacan broj!!!");
//     break;
//   }
//   broj = Number(prompt("Unesite broj:"));
// }

// const broj = Math.floor(Math.random() * 100) + 1;

// korisnik = NaN;

// while (korisnik !== broj) {
//   if (korisnik > broj) {
//     alert("Uneseni broj je veci od zadatog");
//   } else if (korisnik < broj) {
//     alert("Uneseni broj je manji od zadatog");
//   }

//   korisnik = Number(prompt("Unesite broj:"));
// }

// alert(`zadati broj je: ${broj}`);
// while (true) {
//   prviBroj = Number(prompt("Unesi prvi broj"));
//   drugiBroj = Number(prompt("Unesi drugi broj"));
//   znak = prompt("Unesi znak");
//   if (znak === "+") {
//     alert(prviBroj + drugiBroj);
//   } else if (znak === "-") {
//     alert(prviBroj - drugiBroj);
//   } else if (znak === "/") {
//     alert(prviBroj / drugiBroj);
//   } else if (znak === "*") {
//     alert(prviBroj * drugiBroj);
//   }
//   // ako unesemo 0 upoerdimo sa string 0 i zaustavimo peljtu
//   if (znak === "0") {
//     alert("izlaz");
//     break;
//   }
// }

// arr = [2, 3, 4, 5, 4, 3, 4, 4, 4, 3, 4, 3];

// auniqArr = [];

// isInside = false;

// for (let i = 0; i < arr.length; i++) {
//   isInside = false;

//   for (let j = 0; j < auniqArr.length; j++) {
//     if (arr[i] === auniqArr[j]) {
//       isInside = true;
//       break;
//     }
//   }

//   if (isInside) {
//     continue;
//   } else {
//     auniqArr.push(arr[i]);
//   }
//   // if (!isInside) {
//   //   auniqArr.push(arr[i]);
//   // }
// }

// // arr = auniqArr
// console.log(auniqArr);

// var1 = [11, false, 1.01, "hello world", null, 10];

// console.log(var1);

// var1.push();

// console.log(var1);

// niz = [];
// // oaiu3298 = []

// numOfEls = 10;

// for (let i = 0; i < numOfEls; i++) {
//   el = prompt("Unesite element:");
//   niz.push(el);
// }

// for (let i = 0; i < niz.length; i++) {
//   console.log(niz[i]);
// }

// niz = [];
// numOfEls = 10;

// for (let i = 0; i < numOfEls; i++) {
//   el = Number(prompt("Unesite element:"));
//   niz.push(el);
// }

// for (let i = 0; i < niz.length; i++) {
//   if (niz[i] % 2 !== 0) {
//     console.log(niz[i]);
//   }
// }

// console.log(niz);

// arr = [23, 34, 45, 46, 56, 67, 7457, 45, 25, 53];

// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// arr = [23, 34, 45, 46, 56, 67, 7457, 45, 25, 53];

// arr = [];

// for (let i = 0; i < 10; i++) {
//   el = Number(prompt("Unesite ek:"));
//   arr.push(el);
// }

// sumaEl = 0;

// for (let i = 0; i < arr.length; i++) {
//   sumaEl = sumaEl + arr[i];
// }

// console.log(sumaEl);

// // ow48uf02w = [234, 56, 23, false];
// arr = [234, 56, 23, false];

// // arr2 = 2093u928uw
// arr2 = [...arr];

// console.log(arr2);

// arr.push("nova vred");

// arr = [234, 56, 23, false];

// console.log(arr);

// arr.reverse();

// console.log(arr);

// arr = [10, 24, 56];
// console.log(arr);

// arr.unshift();

// console.log(arr);

// maxEl = arr[0];
// secEl = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   let tmpMax = maxEl;
//   if (arr[i] > maxEl) {
//     maxEl = arr[i];
//   }
//   if (arr[i] < tmpMax && arr[i] > secEl) {
//     secEl = arr[i];
//   }
// }

// console.log(maxEl);
// console.log(secEl);

// arr = [123, 1, 324, 213, 2321];

// arr2 = arr;

// console.log(arr2);

// arr[0] = "lalal";
// console.log(arr2);

//sample2.js =====================================
// upon return from bar, myArray2 is not set to null.. why so

// arr = [123, 1, 324, 213, 2321];
// sum = 0;

// arr.forEach((el) => {
//   sum += el;
// });

// console.log(sum);

// arr = [
//   [1, 2, 3], // 0
//   [4, 5, 6, 4, 5, 6], // 1
//   [7], // 2
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j], i, j);
//   }
// }

// arr = [[1, 2, 3], [4, 5, 6, 4, 5, 6], [7]];

// sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i][arr[i].length - 1];
// }

// arr = [
//   [1, 2, 3],
//   [4, 2, 6],
//   [7, 8, 9],
// ];

// sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 !== 0) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] % 2 === 0) {
//         sum += arr[i][j];
//       }
//     }
//   }
// }

// console.log(sum);

// arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// 1
//   5
//     9

// suma glavne dijagolne gorenavedeni brojevi

//     3
//   5
// 7
// suma sporedne dijagolne gorenavedeni brojevi

// arr = [12, 32, 5, 32, 21, 21];

// arr.reduce((prev, curr) => {}, 0);

// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th", "st", "nd", "rd"];

// color.forEach((color, i) => {
//   switch (i + 1) {
//     case 1:
//       console.log(`${i + 1}${o[1]} ${color}`);
//       break;
//     case 2:
//       console.log(`${i + 1}${o[2]} ${color}`);
//       break;
//     case 3:
//       console.log(`${i + 1}${o[3]} ${color}`);
//       break;
//     default:
//       console.log(`${i + 1}${o[0]} ${color}`);
//       break;
//   }
// });

// array1 = [1, 0, 2, 3, 34, 2, 323, 4];
// array2 = [3, 5, 6, 7, 8, 13];
// array3 = [];

// if (array1.length > array2.length) {
//   array3 = array1.map((el, i) => {
//     if (array2[i]) {
//       return el + array2[i];
//     } else {
//       return el;
//     }
//   });
// } else {
//   array3 = array2.map((el, i) => {
//     if (array1[i]) {
//       return el + array1[i];
//     } else {
//       return el;
//     }
//   });
// }

// console.log(array3);

// arr = [NaN, 0, 15, false, -22, "", undefined, 47, null];

// // arr = arr.filter((el) => el && el);

// arr = arr.filter((el) => {
//   if (el) {
//     return el;
//   }
// });

// console.log(arr);

// var1 = {
//   key3: "vred3",
//   key1: "vred1",
//   key2: "vred2",
// };

// user = {
//   location: "srb",
//   lastName: "dupljak",
//   password: "sfira123",
//   name: "dzemil",
//   isLive: true,
// };

// // Write a JavaScript program to get the length of a JavaScript object.

// console.log(Object.keys(user));
// console.log(Object.keys(user).length);

// var library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

// library.forEach((book) => {
//   console.log(book.author, book.readingStatus);
// });

// Chickenwings: 5 points

// Hamburgers: 3 points

// Hotdogs: 2 points
// players = [
//   { name: "Habanero Hillary", chickenwings: 5, hamburgers: 17, hotdogs: 11 },
//   { name: "Big Bob", chickenwings: 20, hamburgers: 4, hotdogs: 11 },
// ];

// points = {
//   chickenwings: 5,
//   hamburgers: 3,
//   hotdogs: 2,
// };

// scoreboard = players.map((player) => {
//   let playerpoints = 0;
//   Object.keys(points).forEach((key) => {
//     playerpoints += player[key] * points[key];
//   });

//   return { name: player.name, score: playerpoints };
// });

// console.log(scoreboard);

// user = {
//   lastName: "dupljak",
//   password: "sfira123",
//   location: {
//     address: "NP",
//     country: "SRB",
//   },
//   name: "dzemil",
//   isLive: true,
// };

// user2 = {
//   ...user,
//   location: {
//     ...user.location,
//   },
// };

// user.lastName = "asdsadasd";
// user.location.address = "NY";

// // console.log(user);
// // console.log("======================================");
// // console.log(user2);

// word = "abracadabra";

// word = word.split("");

// result = {};

// word.forEach((letter) => {
//   if (result[letter]) {
//     result[letter] += 1;
//   } else {
//     result[letter] = 1;
//   }
// });

// console.log(result);
// console.log(Object.entries(result));

// ["a", "b", "c", "d"];

// a = {
//   0: "a",
//   1: "b",
//   2: "c",
//   3: "d",
// };

// user = ["Emir", 180, "Demir", 70, 2606005783944];

// user = {
//   name: "Emir",
//   lastname: "Demir",
//   height: 180,
//   weight: 70,
//   jmbg: 2606005783944,
//   phoneNum: {
//     personal: 123,
//     home: 456,
//     company: 444,
//   },
// };

// // console.log(user.name);

// // arr1 = { a: 1 };
// // arr2 = { a: 1 };
// // console.log(arr1 === arr2);

// const data = { a: 1, b: 2 };
// const data2 = { a: 1, b: 2 };

// // console.log(Object.keys(data));

// res = Object.keys(data).every((key) => data[key] === data2[key]);

// if (Object.keys(data).length === Object.keys(data2).length && res) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // arr1 = { a: 1 };
// // arr2 = { a: 1 };
// // console.log(arr1 === arr2);

// const data = { a: 1, b: 2 };
// const data2 = { a: 1, b: 2 };

// // console.log(Object.keys(data));

// res = Object.keys(data).every((key) => data[key] === data2[key]);

// if (Object.keys(data).length === Object.keys(data2).length && res) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // arr1 = { a: 1 };
// // arr2 = { a: 1 };
// // console.log(arr1 === arr2);

// const data = { a: 1, b: 2 };
// const data2 = { a: 1, b: 2 };

// // console.log(Object.keys(data));

// res = Object.keys(data).every((key) => data[key] === data2[key]);

// if (Object.keys(data).length === Object.keys(data2).length && res) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// function func1(name, age, isLive) {
//   console.log("func1");
//   console.log(name);
//   console.log(age);
//   console.log(isLive);

//   return "hello world";
// }

// retrunVal = func1("dzemil", 27, true);

// console.log(retrunVal);

// function evenOddNum(number) {
//   if (number % 2 === 0) {
//     console.log("PARAN");
//   } else {
//     console.log("NePARAN");
//   }
// }

// for (let i = 0; i < 4; i++) {
//   inputValue = Number(prompt("Unesite broj:"));

//   evenOddNum(inputValue);
// }

// function sumNums(num1, num2) {
//   sum = num1 + num2;

//   return sum;
// }

// for (let i = 0; i < 3; i++) {
//   res = sumNums(3, 5);
//   console.log(res);
// }

// function nazivFucnje(var1, arg2, nesto3) {}

// result = nazivFucnje();

// console.log(result);

// function modifyMultiply(str, loc, num) {
//   wordArr = str.split(" ");
//   word = [];

//   for (let i = 0; i < num; i++) {
//     word.push(wordArr[loc]);
//   }

//   word = word.join("-");

//   return word;
// }

// function modifyMultiply(str, i, n) {
//   return Array(n).fill(str.split(" ")[i]).join("-");
// }

// result = modifyMultiply("crazy fox jumps over the lazy dog", 4, 3);
// // "string-string-string-string-string"

// console.log(result);
// function stantonMeasure(argArr) {
//   occ1 = 0;
//   argArr.forEach((num) => {
//     if (num === 1) {
//       occ1 += 1;
//     }
//   });

//   occNum = 0;

//   argArr.forEach((num) => {
//     if (num === occ1) {
//       occNum += 1;
//     }
//   });

//   return occNum;
// }

// function countOcc(arr, n) {
//   counter = 0;

//   arr.forEach((num) => {
//     if (num === n) {
//       counter += 1;
//     }
//   });

//   return counter;
// }

// function stantonMeasure(arr) {
//   occ1 = countOcc(arr, 1);
//   numOcc = countOcc(arr, occ1);

//   return numOcc;
// }

// arr = [1, 4, 3, 2, 1, 2, 3, 2];

// result = stantonMeasure(arr);

// console.log(result);

// function dayOfTheWeek(date) {
//   return "Monday";
// }

// dayOfTheWeek("02/06/1940");

// function abbrevName(name) {
//   // code away
//   warr = name.split(" ");

//   initials = warr[0][0].toUpperCase() + "." + warr[1][0].toUpperCase();
//   return initials;
// }

// // "dzemil dupljak"
// // ("D.D");

// result = abbrevName("dzemil Dupljak");

// console.log(result);

// function switcheroo(x) {
//   // create arr of letter
//   xArr = x.split("");
//   // create new arr with swithed lietter a to b and vice versa
//   xArr = xArr.map((letter) => {
//     if (letter === "a") return "b";
//     else if (letter === "b") return "a";
//     // return everything else
//     else return letter;
//   });
//   // concat letter from arr to string
//   return xArr.join("");
// }

// result = switcheroo("aabacbaa");

// console.log("aabacbaa");
// console.log(result);

// function mojaFunc() {
//   let mojaVar = 10;

//   if (true) {
//     mojaVar = 11;
//     console.log(mojaVar);
//   }

//   console.log(mojaVar);
// }

// mojaFunc();

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

// function func3() {
//   console.log("3 invoked");
// }

// function func2() {
//   console.log("2 invoked");
//   func3();
// }

// function func1() {
//   console.log("1 invoked");
// }

// func1();
// func2();

// function func3() {
//   console.log("aaaaaaaaaaaaaaaaaa");
// }

// function func2() {
//   func3();
// }

// function func1() {
//   func2();
// }

// func1();

// function mojaFunc() {
//   console.log("mojafunc");
//   console.log("mojafunc");
//   console.log("mojafunc");
//   console.log("mojafunc");
//   console.log("mojafunc");
// }

// drugaFunc = mojaFunc;

// drugaFunc();
// mojaFunc();

// ====================================================================
// function mojaFunc(arg1, arg2, arg3) {
//   console.log("glavni posao");
//   console.log("glavni posao");
//   console.log("glavni posao");
//   arg1();
//   console.log(arg2);
//   arg3();
// }
// mojaCLB = function () {
//   console.log("lalalala");
// };

// mojaFunc(mojaCLB, { prop1: "HELLO WORLD" }, function () {
//   console.log("asdsad");
// });

// myMap = function (argArr, clb) {
//   const newArr = [];

//   for (let i = 0; i < argArr.length; i++) {
//     let newEl = clb(argArr[i]);

//     newArr.push(newEl);
//   }

//   return newArr;
// };

// arr = [1, 2, 3, 4, 5, 3, 23];
// function filter() {}
// arr2 = myMap(arr, function (val) {
//   return val + 10000;
// });

// arr3 = myMap(arr, function (el) {
//   return "ELEMENT: " + el;
// });

// console.log(arr2);
// console.log(arr3);

// function filter(val) {
//   return val > 10;
// }
// function mojfilter(arr, clb) {
//   noviarr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (clb(arr[i])) {
//       noviarr.push(arr[i]);
//     }
//   }
//   return noviarr;
// }
// console.log(mojfilter([2, 5, 19, 22, 2], filter));

// function func3() {
//   console.log("3 invoked");
// }

// function func2() {
//   console.log("2 invoked");
//   func3();
// }

// function func1() {
//   console.log("1 invoked");
// }

// // func1();
// // func2();

// callStack = [];

// callStack.push(func1);
// callStack.pop(func1);

// callStack.push(func2);
// callStack.push(func3);

// callStack.pop(func3);
// callStack.pop(func2);

// x = 5;

// console.log(x);

// var x;

// console.log(functionBelow("Hello"));

// function functionBelow(greet) {
//   return `${greet} world`;
// }

// console.log(functionBelow("Hi"));
// let x;

// console.log(x);

// x = 5;

// function greetings() {
//   console.log("nesto");

//   console.log("nesto");

//   let name;
//   console.log("nesto");

//   console.log(`Hello, ${name}`);
// }

// greetings();

// function init() {
//   var name = "Mozilla";
//   var name132 = "Mozilla";

//   function displayName() {
//     console.log(name);
//   }

//   return displayName;
// }

// moajVar = init();

// moajVar();

// function mojaFunc() {
//   var a;

//   console.log("nesto");
//   console.log("nesto");
//   console.log("nesto");
//   console.log("nesto");
//   a = 10;
//   console.log(a);
//   if (true) {
//     let b;

//     console.log("if block");
//     console.log("if block");
//     console.log("if block");
//     console.log("if block");
//     console.log("if block");
//     b = 10;
//     console.log(b);
//   }
// }

// nekaFunc();

// const nekaFunc = function () {};

// const mojaVar = class {};

// function init() {
//   var name = "Mozilla";
//   var name132 = "Mozilla";

//   function displayName() {
//     console.log(name);
//   }

//   return displayName;
// }

// moajVar = init();
// moajVar2 = init();
// moajVar3 = init();
// moajVar4 = init();

// moajVar();
// moajVar2();
// moajVar3();
// moajVar4();

// function cFunction() {
//   let privateCounter = 0;

//   function changeBy(val) {
//     privateCounter += val;
//   }

//   return {
//     increment() {
//       changeBy(1);
//     },
//     decrement: function () {
//       changeBy(-1);
//     },
//     value: function () {
//       return privateCounter;
//     },
//     mojProp: "dzemil",
//   };
// }

// const counter = cFunction();

// console.log(counter.value());

// counter.increment();
// counter.increment();
// console.log(counter.value());

// counter.decrement();
// console.log(counter.value());
// console.log(counter.mojProp);

// global scope

// const e = 10;

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// // const sum2 = sum(1);
// // const sum3 = sum2(2);
// // const sum4 = sum3(3);

// // const result = sum4(4);

// // console.log(result);

// console.log(sum(5)(3)(2)(3))

// function showHelp(help) {
//   document.getElementById("help").textContent = help;
// }

// function makeHelpCallback(help) {
//   return function () {
//     showHelp(help);
//   };
// }

// function setupHelp() {
//   var helpText = [
//     { id: "email", help: "Your e-mail address" },
//     { id: "name", help: "Your full name" },
//     { id: "age", help: "Your age (you must be over 16)" },
//   ];

//   for (var i = 0; i < helpText.length; i++) {
//     var item = helpText[i];
//     document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
//   }
// }

// setupHelp();

// function showHelp(help) {
//   document.getElementById("help").textContent = help;
// }

// function setupHelp() {
//   var helpText = [
//     { id: "email", help: "Your e-mail address" },
//     { id: "name", help: "Your full name" },
//     { id: "age", help: "Your age (you must be over 16)" },
//   ];

//   helpText.forEach(function (text) {
//     document.getElementById(text.id).onfocus = function () {
//       showHelp(text.help);
//     };
//   });
// }

// setupHelp();

// class Car {
//   constructor(n, y) {
//     this.name = n;
//     this.year = y;
//     this.calcAge = 2022 - y;
//   }
// }

// const myCar = new Car("Ford", 2014);

// console.log(myCar);

// const secondCar = new Car("Mercedes", 2020);

// console.log(secondCar);

// mojaVar = { name: "dzemil" };

// console.log(myCar);
// console.log(mojaVar);

// var asdasda = Number("1");

// class Person {
//   constructor(nickname, favUtensil) {
//     this.nickname = nickname;
//     this.favUtensil = favUtensil;
//   }

//   eatsCereal() {
//     return `${this.nickname} eats cereal with ${this.favUtensil}`;
//   }

//   operate() {
//     return "umm, I am not a doctor. I don't do this.";
//   }
// }

// mojaVar = new Person("dzemil", "pan");
// result = mojaVar.eatsCereal();
// console.log(result);

// mojaVar2 = new Person("drugo", "serpa");
// result2 = mojaVar2.eatsCereal();
// console.log(result2);

// class Person {
//   constructor(nickname, favUtensil) {
//     this.nickname = nickname;
//     this.favUtensil = favUtensil;
//     throw new Error("FYI: Instance of Abstract class cannot be instantiated");
//   }

//   eatsCereal() {
//     return `${this.nickname} eats cereal with ${this.favUtensil}`;
//   }

//   operate() {
//     console.log(
//       "umm, I am not a doctor. I don't do this. ===================="
//     );
//   }
// }

// class Doctor extends Person {
//   constructor(nickname, favUtensil, name, color, specialty) {
//     //super passes down attributes from super class, in this case from Person
//     super(nickname, favUtensil);
//     this.name = name;
//     this.scrubs = color;
//     this.specialty = specialty;
//   }

//   medicalLicense() {
//     console.log(`${this.name}, ${this.specialty}`);
//   }
// }

// class Nurse extends Person {
//   #nurseName;
//   #jmbg;
//   constructor(nickname, favUtensil, name, jmbg) {
//     //super passes down attributes from super class,
//     //in this case from Person
//     super(nickname, favUtensil);
//     this.#jmbg = jmbg;
//     this.#nurseName = name + this.#jmbg;
//   }

//   medicalLicense() {
//     console.log(`${this.#nurseName}, nurse`);
//   }

//   getJmbg() {
//     console.log(this.#jmbg);
//     return this.#jmbg;
//   }
//   setJmbg(val) {
//     this.#jmbg = val;
//   }
// }

// dr = new Doctor("dzd", "pan", "dzemil", "white", "neuro");
// dr.medicalLicense();
// dr.operate();

// nr = new Nurse("smr", "glass", "samra", 123123123213);
// nr.operate();
// nr.medicalLicense();
// console.log(nr.nurseName);

// nr.getJmbg();

// class firstClass {
//   constructor(arg1) {
//     this.prop1 = arg1;
//     this.prop2 = "dzemil";
//   }
//   add() {
//     console.log("First Method");
//   }
// }
// class secondClass extends firstClass {
//   add(val) {
//     console.log(30 + 40, val);
//   }
//   add(val, val2) {
//     console.log(30 + 40, val, val2);
//   }
// }

// var ob = new firstClass("dupljak");
// var ob2 = new firstClass("dupljak", "dzemil");

// console.log("nekidok");
// console.log("nekidok");
// console.log("nekidok");
// console.log("nekidok");
// console.log("nekidok");
// console.log("nekidok");
// console.log("nekidok");
// var C1 = class {
//   constructor() {
//     console.log("asdasd");
//   }
// };
// console.log("nekidok");
// console.log("nekidok");
// console.log("nekidok");
// console.log("nekidok");

// c1 = new C1();

// function nextBigger(n) {
//   console.log(n);
//   console.log("-------------");
//   digits = n
//     .toString()
//     .split("")
//     .map((d) => Number(d));
//   if (digits[digits.length - 1] === 0) {
//     debugger;
//     digits.splice(digits.length - 1, 1);
//     digits.splice(digits.length - 1, 0, 0);
//     let resultNum = Number(digits.join(""));
//     return resultNum;
//   }
//   for (let i = digits.length - 1; i >= 0; i--) {
//     const digit = digits[i];

//     for (let j = i - 1; j >= 0; j--) {
//       const d = digits[j];
//       if (digit > d) {
//         let tmp = digit;

//         digits.splice(i, 1);
//         digits.splice(j, 0, tmp);
//         let resultNum = Number(digits.join(""));
//         console.log(resultNum);
//         // if (resultNum > n) return resultNum;
//       }
//     }
//   }
//   if (Number(digits.join("")) > n) return Number(digits.join(""));
//   return -1;
// }

// result = nextBigger(398653);
// console.log(result);

// result = nextBigger(3999854432);
// console.log(3999854432, result, 4233458999, "--------------");

// result = nextBigger(1234567980);
// console.log(result);

// request = {
//   header: {
//     host: "localhost:3000",
//     remote: "my-app.com/user/",
//     method: "GET",
//     accept: "application/json, text/plain, */*",
//   },
// };

// response = {
//   header: {
//     host: "localhost:3000",
//     remote: "google.com/user",
//     status: 201,
//     accept: "application/json, text/plain, */*",
//   },
//   body: {
//     error: 'no user with this id'
//   },
// };

// mojafUNc = () => {
//   console.log("moja func");
// };

// setTimeout(mojafUNc, 100);

// setTimeout(() => {
//   console.log("drugi posao");
// }, 100);

// mojPosao = new Promise((res, rej) => {
//   responseStatus = 200;

//   if (responseStatus === 200) {
//     res("Uspensno zavrsen posao");
//   } else {
//     rej("failed to fetch");
//   }
// });

// mojPosao
//   .then((result) => {
//     console.log("USPESNO");
//     console.log(result);
//     return "value!!!";
//   })
//   .catch((err) => {
//     console.log("GRESKAAA", err);
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("FINALY");
//   });

// fetch(
//   "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
// )
//   .then((response) => response.json())
//   .then((commits) => {
//     console.log(commits);
//   });

// mojPosao = new Promise((resolve, reject) => {
//   responseStatus = 400;

//   for (let i = 0; i < 900000000; i++) {}

//   if (responseStatus === 200) {
//     resolve("Uspensno zavrsen posao");
//   } else {
//     reject("failed to fetch");
//   }
// });

// mojPosao
//   .then((result) => {
//     console.log("USPESNO");
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("GRESKAAA", err);
//   });

// myUrl = `https://catfact.ninja/facts?page=${1}`;

// pageNum = Number(prompt("Unesite stranu"));
// myUrl = `https://catfact.ninja/facts?page=${pageNum}`;

// fetch(myUrl)
//   .then((response) => {
//     return response.json();
//   })
//   .then((responseBody) => {
//     console.log(responseBody);
//     data = responseBody;
//   })
//   .catch((err) => {
//     console.log("GRESKAAA", err);
//   });

// body = {
//   tagname: "body",
//   childNodes: [div, div2, div3],
// };

// div = {
//   tagName: "div",
//   classList: ["nesto", "drugaClasa"],
//   id: "nekiId",
//   childNodes: [p, div2, span],
// };

// p = {
//   tagName: "p",
//   classList: ["nesto", "drugaClasa", "NoVAKLASA"],
//   id: "nekiId",
//   style: {
//     backroundColor: "red",
//     width: "100px",
//     heigth: "200px",
//   },
// };

// p.classList.addClass("NoVAKLASA");

async function getData() {
  const myUrl = `https://catfact.ninja/facts?page=${1}`;

  try {
    const res = await fetch(myUrl);
    const resJson = await res.json();

    return resJson;
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    console.log("uvek se izvrsi");
  }
}

(async function () {
  const mydata = await getData();

  console.log(mydata);
  console.log("HELLO WORLD");
})();
