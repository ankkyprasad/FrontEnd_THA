import BlackGrid from "./BlackGrid"
import WhiteGrid from "./WhiteGrid"

function ChessBoard(){
    let OddRow = [];
    let EvenRow = [];

    for(let i=0; i<4; i++){
        OddRow.push(<BlackGrid />);
        OddRow.push(<WhiteGrid />);
        EvenRow.push(<WhiteGrid />);
        EvenRow.push(<BlackGrid />);
    }

    return(
        <div className="chess-board-container">
            {OddRow}
            {EvenRow}
            {OddRow}
            {EvenRow}
            {OddRow}
            {EvenRow}
            {OddRow}
            {EvenRow}
        </div>
    )
}

export default ChessBoard