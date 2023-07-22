import React, { useState } from "react";
import Squares from "./Squares";


const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));

    const isWinner = () => {
        
        const logic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let win of logic) {
            const [a, b, c] = win;
            if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
                return true;
            }
        }
        return false;
    }
    const winner = isWinner();


    const [isXturn, setisXturn] = useState(true);

    const click = (index) => {
        const copyState = [...state];
        copyState[index] = isXturn ? "X" : "O";
        setState(copyState);
        setisXturn(!isXturn);
    };
    return (

        <div className="board-container">
            <h1 className="container mt-5">TIC TAC TOE</h1>

            {winner ? (
                <>someone won</> 
                ):(
                <>
                    <div className="board-row">
                        <Squares onClick={() => click(0)} value={state[0]} />
                        <Squares onClick={() => click(1)} value={state[1]} />
                        <Squares onClick={() => click(2)} value={state[2]} />
                    </div>
                    <div className="board-row">
                        <Squares onClick={() => click(3)} value={state[3]} />
                        <Squares onClick={() => click(4)} value={state[4]} />
                        <Squares onClick={() => click(5)} value={state[5]} />
                    </div>
                    <div className="board-row">
                        <Squares onClick={() => click(6)} value={state[6]} />
                        <Squares onClick={() => click(7)} value={state[7]} />
                        <Squares onClick={() => click(8)} value={state[8]} />
                    </div>
                   
                </>
                 )}
            </div>

    )
}

export default Board;