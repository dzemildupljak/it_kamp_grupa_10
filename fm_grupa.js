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

function drugiPosao() {
  console.log("niz parnih");
}

const nekiPosao = (arg1) => {
  //////////////////////////////////////////
  console.log("ceo niz");
  console.log("filter niza");
  //////////////////////////////////////////

  arg1();
};

nekiPosao(drugiPosao);

console.log("komnda 1");
console.log("komnda 2");
console.log("komnda 3");
