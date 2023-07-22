import React from "react";

const Squares = (props) => {
    return (
        <div 
            onClick={props.onClick}
            className="squares"
            style=
            {{
                border: "1px solid",
                height: "100px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px 0"
            }}>

            <h5>{props.value}</h5>
        </div>
    )
}

export default Squares;