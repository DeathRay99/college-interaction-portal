import React from 'react'
import "./Sidebaroption.css"


function Sidebaroption({active, text, Icon,onUpdate}) {
  function handleClick(){
    onUpdate(text);
  }
  return (
    <div className={`Sidebaroption ${active && `Sidebaroption--active`}`} onClick={handleClick}>
    <Icon />
       <h2> {text} </h2>
    </div>
  );
}

export default Sidebaroption;