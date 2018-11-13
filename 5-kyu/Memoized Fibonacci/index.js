const fib = function(n) {
  if(n==0 || n == 1)
      return n;
  return fibonacci(n-1) + fibonacci(n-2);
}

const memoize = fn => {
  let cache = {}
  return (n) => {
    if (n in cache) return cache[n]
    else return cache[n] = fn(n)
  }
}
const fibonacci = memoize(fib);


console.log(fibonacci(5))

const test = (a, b) => {
  return a + b
}

function a(fn) {
  fn
  return (n1, n2) => {
    return fn(n1,n2)
  }
}

const test2 = a(test)
console.log(test2(3,2))
console.log(test(2,2))