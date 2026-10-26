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