const CalorieInput = (props)=>{
    const {inputItem, setInputItem, item, setItem, inputCalAmount, setInputCalAmount} = props;
    const inputItemHandler = (e)=>{
        setInputItem(e.target.value);
    };
    const inputCalAmountHandler = (e)=>{
        setInputCalAmount(e.target.value);
    };
    const addItemHandler = ()=>{
        if(inputItem === "" || inputCalAmount === ""){
            alert("Input Fields are required");
            return;
        }
        const randomId = Math.floor(Math.random()*10000)
        setItem([
            ...item, {item: inputItem, calorie:inputCalAmount, id: randomId}
        ]);
        setInputItem("");
        setInputCalAmount("");
    };
    return(
        <div className="calorie-main">
            <div className="calorie-input">
                <input value={inputItem} type="text" placeholder="Item Name" onChange={inputItemHandler}/>
                <input value={inputCalAmount} type="number" placeholder="Calorie Amount" onChange={inputCalAmountHandler}/>
            </div>
            <div className="calorie-button">
                <button onClick={addItemHandler}>Add Item</button>
            </div>
        </div>
    )
}
export default CalorieInput