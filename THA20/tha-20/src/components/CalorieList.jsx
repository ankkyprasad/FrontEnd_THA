import React,{useState} from 'react'
import CalorieData from "./CalorieData"
import CalorieEmptyList from './CalorieEmptyList';

function CalorieList(){
    const foodList =[{name:"pizza", cal: 46}, {name:"burger",cal:23}, {name:"coke", cal: "less than water"}, {name:"parle-G", cal:"infinite"}, {name:"chicken",cal:100}, {name:"Paneer",cal:0}];
    let [calEl, setCalEl] = useState(foodList);

    return(
        <div className="calorie-list-container">
            {
                calEl.length ? (
                calEl.map((food, index)=>{
                        return <CalorieData food= {food.name} calorie= {food.cal} calEl ={calEl} setCal = {setCalEl} index={index} key={index} />
                })) : (
                    <CalorieEmptyList />
                )
            }
        </div>
    )
}

export default CalorieList