// function domainName(url){
//   let name = ''
//   const cases = ['','http://', 'https://','http://www.', 'https://www.', 'www.']
//   cases.forEach((e)=> {
//     if(url.slice(0,e.length) === e) name = url.slice(e.length, url.length).split('.')[0]
//   })
//   return name
// }

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

console.log(domainName("0lukui7knrvwdmd75cuzk3sky.name/"))
console.log(domainName("https://youtube.com"))
console.log(domainName("www.xakep.ru"))

