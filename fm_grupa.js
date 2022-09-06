// function prva() {
//   druga();
//   console.log("prva");
// }

// function druga() {
//   treca();
//   console.log("druga");
// }

// function treca() {
//   console.log("treca");
// }

// prva();

// function drugiPosao() {
//   console.log("niz parnih");
// }

// const nekiPosao = async (arg1) => {
//   //////////////////////////////////////////
//   console.log("ceo niz");
//   //////////////////////////////////////////
//   arg1();
// };

// nekiPosao(drugiPosao);

// console.log("komnda");
// console.log("komnda");
// console.log("komnda");

// console.log("comanda 1");
// console.log("comanda 2");
// setTimeout(() => {
//   console.log("comanda 3");
// }, 500);
// console.log("comanda 4");

// setTimeout(() => {
//   console.log("comanda 5");
// }, 500);

// function drugiPosao() {
//   console.log("niz parnih");
// }

// const nekiPosao = (arg1) => {
//   //////////////////////////////////////////
//   console.log("ceo niz");
//   console.log("filter niza");
//   //////////////////////////////////////////

//   arg1();
// };

// // nekiPosao(drugiPosao);

// nekiPosao(() => {console.log("druga funkcija!!!");});

// console.log("komnda 1");
// console.log("komnda 2");
// console.log("komnda 3");

// function arrayMap(arr, clback) {
//   res = [];
//   for (let i = 0; i < arr.length; i++) {
//     newEl = clback(arr[i]);
//     res.push(newEl);
//   }
//   return res;
// }

// // myfunc = function (arg1) {
// //   return arg1 * 2;
// // };

// niz = arrayMap([1, 2, 3, 4, 5], function (arg1) {
//   return arg1 * 2;
// });

// console.log(niz);

// function myfunc(el) {
//   return el * 2;
// }

// res = [1, 2, 3, 4, 5].map((el) => {
//   return el * 2;
// });

// console.log(res);

// console.log(1);
// console.log(2);

// func = () => {
//   console.log(3);
// };

// setTimeout(func, 1000);

// console.log(4);

// posao = new Promise((resolve, reject) => {
//   response = 200;

//   for (let i = 0; i < 900000000; i++) {}
//   if (response === 202) {
//     resolve([1, 2, 3, 4, 5]);
//   } else {
//     reject("GRESKAAAA!!!");
//   }
// });

// posao
//   .then((data) => {
//     console.log("uspesno povukao podatke", data);
//     arr = data.filter((el) => el % 2 === 0);
//     return arr;
//   })
//   .then((arg1) => {
//     console.log("druga func", arg1);
//   })
//   .catch((err) => {
//     console.log("neuspesno povukao podatke", err);
//   })
//   .finally(() => {
//     console.log("disati");
//   });

// function onResolve(mojArg) {
//   console.log("moja resovle then");
//   console.log(mojArg);
// }

// fetch("https://catfact.ninja/facts")
//   .then((result) => {
//     res = result.json();
//     return res;
//   })
//   .then(onResolve)
//   .catch((err) => {
//     console.log(err, "====================================");
//   });

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

// function mojaFunc() {
//   console.log("asdsad");
// }

// mojaFunc();

// function mojaFunc() {
//   a = 10;

//   function drugafunc(arg1) {
//     console.log("drugaaaa");
//     console.log(arg1 + a);
//   }

//   return drugafunc;
// }

// res = mojaFunc();

// res(5);

// function makeAdder(x) {
//   function innerFunc(y) {
//     return x + y;
//   }

//   return innerFunc;
// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(3));
// console.log(add10(7));

// function makeAdder(x) {
//   return function (y) {
//     return function (z) {
//       return x + y + z;
//     };
//   };
// }

// console.log(makeAdder(12)(4)(6));

// function curry(f) {
//   // curry(f) does the currying transform
//   return function (a) {
//     return function (b) {
//       return f(a, b);
//     };
//   };
// }

// // usage
// function sum(a, b) {
//   return a + b;
// }

// let curriedSum = curry(sum);

// console.log(curriedSum(1)(2));

// fetch("https://catfact.ninja/facts")
//   .then((result) => {
//     res = result.json();
//     return res;
//   })
//   .then((r) => {
//     console.log(r);
//   })
//   .catch((err) => {
//     console.log(err, "====================================");
//   });

// prom = new Promise((res, rej) => {
//   res();
// });

// prom.then(() => {
//   prom.then(() => {
//     console.log("B");
//   });
//   console.log("A");
// });

// prom.then(() => {
//   console.log("C");
// });

// mojaF = () => {
//   console.log("mojaf");
// };

// mojaF();

// var mojaF;
// // let mojaF;
// var a = 10;

// function f1() {}

// function f2() {
//   console.log(a);
// }

// f1();
// f2();

// if (true) {
//   const a = 19;
//   a = 213;
//   console.log(a);
// }

// console.log(a);

// function mojaFunc() {
//   a = 10;

//   function drugafunc(arg1) {
//     console.log("drugaaaa");
//     console.log(arg1 + a);
//   }

//   return drugafunc;
// }

// res = mojaFunc();

// res(5);

// var1  = function () {

// }

// var1 = [12, 3, 23, 2];

// var1.map(() => {

// })

// setTimeout(
//   () => {},
//   1000,
//   () => {}
// );

// function setTimeout(arg1, arg2, arg3) {
//   arg1();
//   arg2();
// }

res = setTimeout(() => {}, 1000);
console.log(res);
