function domainName(url){
  const cases = ['','http://', 'https://','http://www.', 'https://www.', 'www.']
  cases.forEach((e)=> {
    if(url.slice(0,e.length) === e) {return url.slice(e.length, url.length).split('.')[0]}
  })
}


console.log(domainName("0lukui7knrvwdmd75cuzk3sky.name/"))
console.log(domainName("https://youtube.com"))
console.log(domainName("www.xakep.ru"))