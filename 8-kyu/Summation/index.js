const summation = num => {
  let sum = 0
  for (let i = 0; i < num; i++) {
    sum += num - i
  }
  return sum
}

// Short version
// const summation = n => n * (n + 1) / 2;
