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

// console.log(proxyObject.name) //Ayhan
// console.log(proxyObject.surname)//Error: Access denied!

//--------------------------------------------------------------

let object2 = {

}

let proxyObject2= new Proxy(object,{
    set(target,property,value){
        if(property === 'surname' && typeof value === "string"){
            target[property] = value;
        }
        else{
            throw new Error('Access denied!')
        }
    }
})

proxyObject2.surname='Güngör'
console.log(proxyObject2.surname) //Güngör
proxyObject2.surname =123456789 // Error: Access denied!

//--------------------------------------------

let object3 ={
    name:'Ayhan',
    surname:'Güngör'
}

let propertyObject3 = new Proxy(object,{
    deleteProperty(target,property){
        if(property in target){
            delete target[property];
            console.log(`Deleted ${property}`)
        }
        else{
            throw new Error("Access denied!")
        }
    }
})
delete propertyObject3.name; //Deleted name
console.log(propertyObject3); //{surname:'Güngör'}

delete propertyObject3.email; //Error
