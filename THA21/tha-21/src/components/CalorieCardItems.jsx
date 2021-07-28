import { useState } from "react";

const CalorieCardItems = ({itemName, calorie, item, calItem, setItem})=>{
    const [isEdit, setIsEdit] = useState(false);
    const [editItemName, setEditItemName] = useState(itemName);
    const [editCalorie, setEditCalorie] = useState(calorie);

    const deleteHandler = ()=>{
        setItem(item.filter(el => el.id !==calItem.id));
    }
    const editHandler = ()=>{
        setIsEdit(!isEdit);
    }
    const saveHandler = ()=>{
        const clonedItem = [...item];
        for(let i=0; i<clonedItem.length; i++){
            if(clonedItem[i].id === calItem.id){
                const tmp = {item: editItemName, calorie: editCalorie, id: clonedItem[i].id}
                clonedItem[i] = tmp;
            }
        }
        setItem(clonedItem);
        setIsEdit(!isEdit);
    }
    return(
        <div className="cal-items">
            {isEdit ? (
                <>
                    <input type="text" value={editItemName} onChange={(e)=>{setEditItemName(e.target.value)}} />
                    <input type="number" value={editCalorie} onChange={(e)=>{setEditCalorie(e.target.value)}}/>
                </>
            )   :   (
            <li>
                <h2>{itemName}</h2>
                <p>You have consumed {calorie} calories.</p>
            </li>
            )}
            <div className="item-btn">
                <button className="delete-btn" onClick={deleteHandler}>Delete</button>
                {
                    isEdit ? (
                        <button className="edit-btn" onClick={saveHandler}>Save</button>
                    ) : (
                        <button className="edit-btn" onClick={editHandler}>Edit</button>
                    )
                }
            </div>
        </div>
    )
}

export default CalorieCardItems