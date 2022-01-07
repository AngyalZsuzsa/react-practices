import React from "react";

const  handleClick = (event) => {
    console.log(event)
    document.getElementById("text").className -= 'hidden';
};

function buttonClick() {
    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <h3 id="text" className="hidden">voila text</h3>
        </div>
        
    )
}

export default buttonClick
