function isEqual(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if(obj1Keys.length !== obj2Keys.length){
        return false;
    }
    for(let objKeys of obj1Keys){
        if(obj1[objKeys] !== obj2[objKeys]){
            return false;
        }
    }
    return true;
};
let obj1 = {
    name: 'Person 1', 
    age: 5
};
let obj2 = 
{
    age: 5, 
    name: 'Person 1'
};
var result = isEqual(obj1, obj2);
console.log(result);