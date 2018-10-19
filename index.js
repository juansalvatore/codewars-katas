// FUNCTIONAL PROGRAMMING USING JAVASCRIPT
// Higher order functions:
// Filter
// Map
// Reduce
// Closures
const animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
]

let names = animals.map(animal => animal.name)

console.log(names)

// Reduce
const orders = [{ amount: 2 }, { amount: 4 }, { amount: 4 }]

const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)
console.log(totalAmount)

// Reduce advanced
const output = [['juan', 'perro', '20'], ['juan', 'leon', '20']]

const parsedOutput = output.reduce((owners, line) => {
  owners[line[0]] = owners[line[0]] || []
  owners[line[0]].push({ animal: line[1], edad: line[2] })
  return owners
}, {})

console.log(parsedOutput)

// Closures
// son funciones que manejan variables independientes

// sendRequest = () => {
//   const requestID = '123'
//   $.ajax({
//     url: '/myUrl',
//     success: response => {
//       alert('Request ' + requestID + ' returned')
//     },
//   })
// }

function creaFunc() {
  var nombre = 'Mozilla'
  function muestraNombre() {
    return nombre
  }
  return muestraNombre
}

var miFunc = creaFunc()
console.log(miFunc())

// Curring
// Function that doesn't take all the arguments upfront
import _ from 'lodash'
let dragon = name => size => element => {
  return name + ' is a ' + size + ' dragon that breathes ' + element + '!'
}

let dog = (name, breed) => `${name} is of breed: ${breed}`

dog = _.curry(dog)

console.log(dog('luna')('boyero'))

// CURRING PRACTICE
let animales = [
  { name: 'pepe', type: 'perro' },
  { name: 'lalo', type: 'perro' },
  { name: 'lucho', type: 'gato' },
  { name: 'olivia', type: 'gato' },
]

let hasElement = (element, object) => object.type === element
hasElement = _.curry(hasElement)
let dogs = animales.filter(hasElement('perro'))
console.log(dogs)

// Recursion
