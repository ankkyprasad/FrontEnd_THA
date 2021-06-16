function array_clone(x){
    return x.map((x) => x);
}

let x = [1,3,4,6,8,12];
let x1 = [1, 2, [4, 0]];


let y = array_clone(x);
let y1 = array_clone(x1);

console.log(y);
console.log(y1);