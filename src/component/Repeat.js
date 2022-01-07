import React from "react";

const btn = <button>Repeat buttons</button>;
const n = 10;
const btnList = [...Array(n)].map((ud, n) => <span key={n}>{btn}<br/> </span>)

const Repeat = () => {
    return (
      <div>      
        {btnList}
      </div>
    )
  }
  
export default Repeat

