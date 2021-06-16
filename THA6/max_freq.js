function maxFreq(x){
    let freq = 0;
    let tmp = 0;
    let hmap = {};
    let max = null;
    
    for(let i = 0; i < x.length; i++){
        if (x[i] in hmap){
            hmap[x[i]] += 1;
        } else{
            hmap[x[i]] = 1;
        }
        freq = Math.max(freq, hmap[x[i]]);
        
        if(tmp != freq){
            max = x[i];
            tmp === freq;
        }
    }
    console.log(max + "(" + freq +" times)");
}

let arr = [1,1,1,5,'a','g','a', 1];
maxFreq(arr);
