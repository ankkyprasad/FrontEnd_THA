function CalorieData(props){
    return(
        <div className="calorie-data">
            <h2>{props.foodName}</h2>
            <p>You have consumed {props.calAmount} cals today</p>
        </div>
    )
}

export default CalorieData