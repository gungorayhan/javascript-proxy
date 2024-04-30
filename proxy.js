let object = {
    name:'Ayhan',
    surname:'Güngör'
}


let proxyObject = new Proxy(object,{
    get(target,property){
        if(property === 'name'){
            return target[property]
        }else{
            throw new Error("Access denied!")
        }
    }
})

console.log(proxyObject.name) //Ayhan
console.log(proxyObject.surname)//Error: Access denied!