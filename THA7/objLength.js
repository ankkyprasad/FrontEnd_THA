var student = { name : "David Rayy", sclass : "VI", rollno : 12, programmer: "true", hasLife: "false" };

function countObj(x){
    return Object.keys(student).length
}

console.log(countObj(student));