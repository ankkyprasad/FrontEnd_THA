function is_array(x){
    let arr = x instanceof Array;
    return arr;
}

let a = [1,2,4,6];
let b = 'Hello World';
console.log(is_array(b));