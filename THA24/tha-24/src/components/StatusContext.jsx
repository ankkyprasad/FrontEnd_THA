import { useState, createContext } from "react";

export const StatusContext = createContext();

export const ChangeStatus = (props)=>{
    const [isLogin, setIsLogin] = useState(false);
    
    return(
        <StatusContext.Provider value={[isLogin, setIsLogin]}>
            {props.children}
        </StatusContext.Provider>
    )
}