import React, { useState } from "react";
import "../App.css";


function CustomCursor(){
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();
    window.addEventListener("mousemove", (e)=>{
        setCursorX(e.pageX)
        setCursorY(e.pageY)
    })
    return(
        <div className="cursor"
        style={{
            left: cursorX + 'px',
            top: cursorY + 'px'
        }} />
    )
}

export default CustomCursor;