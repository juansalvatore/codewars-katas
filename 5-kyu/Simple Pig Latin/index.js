function pigIt(str) {
  return str.split(' ').map(i => i ==='?' || i ==='!' ? i : i.slice(1) + i.slice(0,1) + 'ay').join(' ')
}

console.log(pigIt("Quis custodiet ipsos custodes ?"))