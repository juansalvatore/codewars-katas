// function add(x1) {
//   let result = x1
//   return function sum(x2) {
//     result += x2
//     result
//     return sum
//   }
// }


// function add(n){
//   var fn = function(x) {
//     return add(n + x);
//   };
  
//   fn.valueOf = function() {
//     return n;
//   };
  
//   return fn;
// }

var add = function(n) {
  const f = x => add(n + x)
  f.valueOf = () => n
  return f;
}

var addTwo = add(2);
addTwo

console.log(1+add(1))
console.log(+add(1)(2)(3)(4))

// add(1)(2)(3)(4)
// add(1)(2)(3)(4)(5)