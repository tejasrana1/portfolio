import React from "react";
import "./Project.css";


function Project(props){
    function mapped(item){
        return(
            <p>{item}</p>
        )
    }
    return(
        <div className="project">
            <div className="preview">
                <img src={props.image}  alt="" />
                <div className="buttons">
                    <a href={props.code} rel="noreferrer" target="_blank" ><button>Code</button></a>
                    <a href={props.demo} rel="noreferrer" target="_blank" ><button>Site</button></a>
                </div>
            </div>
            <div className="details">
                <div className="info">
                    <div className="dosis projectName">{props.name}</div>
                    {props.description}<br />
                    {props.tech.map(mapped)}
                
                </div>
            </div>
        </div>
    )
}

export default Project;