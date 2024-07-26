let val1 = 10;
let val2 = 2;
function addnum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addnum(val1, val2);
let result2 = addnum(10, 45);
console.log(result1);
console.log(result2);

//callstack

function one() {
  console.log("one");
  two();
}
function two() {
  console.log("two");
  three();
}
function three() {
  console.log("three");
}

one();
two();
three();
