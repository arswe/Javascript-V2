// let x = { value: 10 }; //
// let y = x;

// x.value = 20;

// console.log(x); // 20
// console.log(y); // 10

let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}
increase(obj);
console.log(obj);