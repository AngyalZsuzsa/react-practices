import React from "react";

const Toggle = () => {
  const [show, toggleShow] = React.useState(true);
  return (
    <div>
      <button onClick={() => toggleShow(!show)}>{show ? "Clicked me!" : 'You clicked me!'}</button>    
      {!show && <div>voila text</div>} <br />
      
    </div>
  )
}

export default Toggle
