import React from "react";
import Squares from "./Squares";


const Board = () => {
    return (
        <div className="board-container">
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