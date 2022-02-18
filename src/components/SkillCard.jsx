import React from "react";
import "./SkillCard.css"
function SkillCard(props){
    return(
        <div className="container">
            <img className="image" src={props.img} alt={props.alt} />
            <div className="text">{props.text}</div>
        </div>
    )
}

export default SkillCard;