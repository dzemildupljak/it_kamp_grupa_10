// glavniPosao();

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

// console.log(1);

// console.log(2);

// setTimeout(() => {
//   console.log(3);
// }, 0);

// console.log(4);

// setTimeout(() => {
//   console.log(5);
// }, 0);

// function glavniPosao(clb) {
//   console.log("posao");
//   console.log("posao");
//   console.log("posao");
//   console.log("posao");
//   console.log("posao");
// }

// function mojafunc() {
//     nizUser.forEach()
//   console.log("callback!!");
//   console.log("callback!!");
//   console.log("callback!!");
//   console.log("callback!!");
// }

// function drugaFcun() {
//   console.log("HELLOW");
//   console.log("HELLOW");
//   console.log("HELLOW");
//   console.log("HELLOW");
//   console.log("HELLOW");
// }

// glavniPosao();
// mojafunc();
// glavniPosao();
// drugaFcun();

// mojaFunc = function () {
//   console.log("neki posao posle");
// };

// mojaFunc = function () {
//   console.log("lalalaalal");
// };

// setTimeout(mojaFunc, 100);

// setTimeout(function () {
//   console.log("aaaaaaaaaaaaaaa");
// }, 200);

// setInterval(() => {

// }, interval);

// arr = [12, 3, 213, 21, 321, 3];

// elementFunc = function (mojArg) {
//   console.log(mojArg, "Hello");
// };

// arr.forEach(elementFunc);

// arr.forEach((el) => {}, dugiar, reci);

// var var1 = 11;

// function fucn1() {
//   if (true) {
//     var var2 = 22;
//     console.log(var2);
//   }
//   console.log(var1);
//   console.log(var2);
// }

// fucn1();

// console.log(var2);

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 0);
// }

// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }

// init();

// function makeFunc() {
//   const name = "Mozilla";

//   function displayName() {
//     let a = "heloo";
//     console.log(a, name);
//     return a;
//   }

//   console.log(a);

//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

// (function (arg1) {
//   console.log("nestolalaalal");
//   console.log("nestolalaalal");
//   console.log("nestolalaalal");
//   console.log(arg1);
// })("HELOO");

// moajFunc = function () {
//   let privateCounter = 0;

//   function changeBy(val) {
//     privateCounter += val;
//   }

//   return {
//     increment: function () {
//       changeBy(1);
//     },
//     decrement: function () {
//       changeBy(-1);
//     },
//     value: function () {
//       return privateCounter;
//     },
//     username: "dzemil",
//   };
// };

// const counter = moajFunc();

// console.log(counter.value()); // 0

// counter.increment();
// counter.increment();
// console.log(counter.value()); // 2.

// counter.decrement();
// console.log(counter.value()); // 1.

// console.log(counter.username);
// a = 10;

// a = "Hello";

// console.log(typeof a);

// class Person {
//   constructor(n, ln) {
//     this.name = n;
//     this.lastnae = ln;
//   }
// }

// mojaVar = new Person("dzmil", "duplajk");

// mojaVar.name;
// mojaVar.lastnae;

// drugaVa = new Person();

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return "I have a " + this.carname;
//   }
// }

// 10

// b = new BMW("bmw");

// console.log(b.show());
// console.log(b.present());
