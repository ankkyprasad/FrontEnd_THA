let obj1 = {
    name: "My Calculator",
    getSum: function(a,b){
        console.log(a+b);
    },
    getSubstract: function(a,b){
        console.log(a-b);
    }
}

let obj2 = {
    name: "Your Calculator"
}

obj1.getSum.call(obj2, 1,2);
obj1.getSubstract.apply(obj2, [2,1]);

let a = obj1.getSum.bind(obj1, 100, 200);
a();