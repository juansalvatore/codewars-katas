oper = (fct, s)=> fct(s.split('\n')).join('\n')

vertMirror = s => s.map(item => item.split('').reverse().join(''))
 
horMirror = s => s.reverse()

s = "abcd\nefgh\nijkl\nmnop"
console.log(oper(horMirror,s))