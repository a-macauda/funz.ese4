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