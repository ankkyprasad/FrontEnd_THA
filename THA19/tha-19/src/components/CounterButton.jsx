import React, {Component} from "react"

class CounterButton extends Component{
    constructor(){
        super();

        this.state = {
            count: 0
        }

        this.changeCount = this.changeCount.bind(this)
    }

    changeCount(){
        this.setState(prevState =>{
            return{
                count: prevState.count + 1
            }
        })
    }

    render(){
        return(
            <button onClick={this.changeCount}>{this.state.count}</button>
        )
    }
}

export default CounterButton