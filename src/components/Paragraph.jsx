import React from "react";
import "./fonts.css";

function Paragraph(props){
    return(
        <div className="sensation">
            {props.children}
        </div>
    )
}

export default Paragraph;