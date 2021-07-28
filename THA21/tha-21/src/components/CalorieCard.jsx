import CalorieCardItems from "./CalorieCardItems"

const CalorieCard = ({item, setItem})=>{
    return(
        <div className="calorie-card">
            <h1>Start Adding Items</h1>
            <ul className="calorie-card-items">
                {
                    item.map((calItem)=>(
                        <CalorieCardItems itemName={calItem.item} calorie={calItem.calorie} item={item} setItem={setItem} calItem={calItem} key={calItem.id}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default CalorieCard;