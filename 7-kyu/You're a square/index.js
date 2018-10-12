isSquare = (n) => {
  return Math.sqrt(n) === Math.floor(Math.sqrt(n))
}

console.log(isSquare(3))

// function isSquare(n) {
//   return Math.sqrt(n) % 1 === 0;
// }