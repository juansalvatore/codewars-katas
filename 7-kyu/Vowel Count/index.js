getCount = str => {
  return str.split('').filter(letter => ['a','e','i','o','u'].includes(letter)).length
}

console.log(getCount("abracadabra"))