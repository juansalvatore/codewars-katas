function calculateYears(principal, interest, tax, desired) {
  if(principal === desired) return 0
  let years = 0
  while(principal < desired){
    principal += principal * interest - principal * interest * tax
    years++
  }
  return years            
}

console.log(calculateYears(1000,0.01625,0.18,1200))