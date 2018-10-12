// symbols "A" and "T" are complements of each other, as "C" and "G".
DNAStrand = dna => {
  const complements = {A: 'T', T: 'A', C: 'G', G: 'C' }
  return dna.split('').map(symbol => complements[symbol]).join('')
}

console.log(DNAStrand("TACA"))