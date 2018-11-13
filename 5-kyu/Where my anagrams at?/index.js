anagrams = (word, words) => words.filter(i => i.sort() === word.sort())
String.prototype.sort = function() {
  return this.split("").sort().join("");
}
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))