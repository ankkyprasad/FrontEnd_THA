import { useState, useEffect } from "react";
import Template from "./Templates.jsx"
import Meme from "./Meme.jsx";

const MemeTemplate =()=>{
    const [templates, setTemplates] = useState([]);
    const [meme, setMeme] = useState(null);

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res=>res.json())
            .then(data => setTemplates(data.data.memes))
    },[])

    return(
        <div>
            <h1>Meme Generator</h1>
            {meme === null ? (
                <Template templates = {templates} setMeme={setMeme} />
            ) : (
                <Meme meme={meme} setMeme={setMeme}/>
            )}
        </div>
    );
};

export default MemeTemplate;
