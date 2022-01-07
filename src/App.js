import React from "react";
import Toggle from './component/Toggle';
import Repeat from "./component/Repeat";
import BtnListWithMap from "./component/btnListWithMap";
// import ButtonList from "./component/buttonList";

import Profile from "./component/profile";
import Profile2 from "./component/profile2";
import Profile3 from "./component/profile3";
import Profile4 from "./component/profile4";

import './App.css';




function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Toggle />
        <Repeat />
        {/* <ButtonList text={buttonText} text2="blaBla"/> */}
        <BtnListWithMap />
        <Profile />
        <Profile2 />
        <Profile3 />
        <Profile4 />
      </header>
    </div>
  );
}

export default App;
