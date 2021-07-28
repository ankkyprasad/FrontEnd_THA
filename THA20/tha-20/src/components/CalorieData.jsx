function CalorieData({food, calorie, calEl, setCal, index}){
    return(
        <div className="calorie-data">
            <h2>{food}</h2>
            <h4>You have consumed {calorie} calories today.</h4>
            <button onClick={()=>{
                const newCalData = calEl.filter((el, i) => i !== index)
                setCal(newCalData)
            }}>Delete</button>
        </div>
    )
}
export default CalorieData