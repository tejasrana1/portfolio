import React from "react";
import "./fonts.css";
function HeadDiv(props){
    return(
        <div className="cafe" style={props.style}>
            {props.children}
        </div>
    )
}


export default HeadDiv;