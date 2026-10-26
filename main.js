function stringapal(str) {
        str = str.replace(/\W/g, "")
   
        let palstr = str.split('').reverse().join('')
    
    if(str == palstr){
        return true
    }else {
        return false
    }
}
console.log(stringapal('esempio'))


//risparmio spazio che il pc vecchiotto non aiuta

let numeri = [ 4, 18, -5, 23, 6, -6 ];

let decrescenti = numeri.sort((a,b)=> b - a);
 console.log(decrescenti);
let crescenti = numeri.sort((a,b) => a - b);
 console.log(crescenti);




 let numerimedia = [3, 6, 10, 8, 4]
 let sum = numerimedia.reduce((acc, n)=>acc + n)
 let media = sum /numerimedia.length

 let numminori = numerimedia.filter(n => n < media)
  let nummaggiori = numerimedia.filter(n => n > media)
console.log(sum)
console.log(media)
console.log(numminori)
console.log(nummaggiori)

