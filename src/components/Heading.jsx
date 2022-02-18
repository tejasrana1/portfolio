import React from "react";
import "./fonts.css";

function Heading(props){
    return(
        <div className="dosis" styles={{marginleft: "1000px"}}>
            {props.children}
        </div>
    )
}

export default Heading;