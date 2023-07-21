import React from "react";
import Squares from "./Squares";


const Board = () => {
    return (
        <div className="board-container">
             <h1 className="container mt-5">TIC TAC TOE</h1>
            <div className="board-row">
                <Squares />
                <Squares />
                <Squares />
            </div>
            <div className="board-row">
                <Squares />
                <Squares />
                <Squares />
            </div>
            <div className="board-row">
                <Squares />
                <Squares />
                <Squares />
            </div>
        </div>
    )
}

export default Board;