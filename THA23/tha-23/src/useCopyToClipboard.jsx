import { useState } from "react";

function useCopyToClipboard(){
    const [isCopied, setIsCopied] = useState(false);

    async function handleCopy(data){
        try{
            await navigator.clipboard.writeText(`${data}`);
            setIsCopied(true);
        }
        catch{
            setIsCopied(false);
        }
    }

    function reset(){
        setIsCopied(false);
    }
    setTimeout(reset, 2000);

    return[isCopied, handleCopy];
}

export default useCopyToClipboard;