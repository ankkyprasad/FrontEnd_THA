function MemeCard(){

    // async function MemeGenerator(){
    //     // let APIurl = "https://www.reddit.com/r/memes/";
    //     // let randomMeme = await fetch(APIurl)
    //     //     .then(response => console.log(response))
    //     //     // .then(data => data.url)
    //     // // return await randomMeme;
    // }

    // MemeGenerator();

    function SomeImg(){
        // let memeImage = MemeGenerator();
        // memeImage
        //     .then(success => ()=>{
        //         // return  <img src="" alt="" />
        //         return  <img src={success} alt="" />
        //     })
        //     .catch(error => console.log(error))

        return  <img src="https://static.langimg.com/thumb/msid-83084208,width-680,resizemode-3/navbharat-times.jpg" alt="" />

    }
    return(
        <div className="meme-card">
            <h2>Meme</h2>
            <SomeImg />
        </div>
    )
} 

export default MemeCard