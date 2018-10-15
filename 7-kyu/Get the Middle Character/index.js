getMiddle = string => {
  if (string.length % 2 === 0) {
    return string
  } else {
    const index = (string.length - 1) / 2
    return string.split('')[index]
  }
}

const string = 'helpo'

console.log(getMiddle(string))
