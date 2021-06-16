var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

function printObj(x){    
    for(let i = 0; i < x.length; i++){
        let tmp = x[i];
        console.log(tmp.author);
        console.log(tmp.title);
        console.log(tmp.readingStatus);
    }
}

printObj(library)