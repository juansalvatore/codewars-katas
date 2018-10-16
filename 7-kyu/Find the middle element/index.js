gimme = a => a.indexOf(a.filter(n => Math.min(...a) < n && n < Math.max(...a))[0])

console.log([5, 1, 14].sort(function(a, b) { return a - b }))