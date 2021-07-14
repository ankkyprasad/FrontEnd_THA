import CounterButton from "./components/CounterButton"
import "./components/Style.css"

function App(){
    return(
        <div className="counter-btn">
            <CounterButton />
            <CounterButton />
            <CounterButton />
        </div>
    )
}

export default App