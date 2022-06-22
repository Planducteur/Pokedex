import React from 'react';
import './styles/Box.css';

const Box = (list) => {
    //console.log(list);

    /*
    Render des sprites
    des boxes cliquable
    */
    return (
    <button onClick={() => list.handleOnClick(list.index+1)} className="box">
        <img src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${list.index+1}.png`}/>
        <button type="button">Add</button>
    </button>
  )
  };
  
export default Box;
