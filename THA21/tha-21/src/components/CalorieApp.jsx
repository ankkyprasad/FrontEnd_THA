import { useState } from "react";
import CalorieInput from "./CalorieInput";
import CalorieCard from "./CalorieCard";

function CalorieApp(){
    let [inputItem, setInputItem] = useState("");
    let [inputCalAmount, setInputCalAmount] = useState();
    let [item, setItem] = useState([]);

    return(
        <div>
            <CalorieInput inputItem={inputItem} setInputItem={setInputItem} item={item} setItem={setItem} inputCalAmount={inputCalAmount}
                setInputCalAmount={setInputCalAmount}/>
            <CalorieCard item={item} setItem={setItem}/>
        </div>
    )
}

export default CalorieApp