import React from 'react';
import './styles/View.css';

const View = ({ pokemon }) => {
    const { id, name, sprite, sprite_shiny, type,ability} = pokemon;
    //console.log(name)
    //console.log(sprite)
    //console.log(sprite_shiny)
    //console.log(type)
    //console.log(ability)

  return (
    <section className="view">
      Normal <img src={sprite} className='image' alt="sprite"/>
      Shiny <img src={sprite_shiny} className='image' alt="sprite_shiny"/>
      <div className='detail'>
        <h1 className='titre'>ID</h1>
        <h1 className='data'>{id}</h1>  
        <h1 className='titre'>Non</h1>
        <h1 className='data'>{name}</h1>
        <h1 className='titre'>Type</h1>
        <h1 className='data'>{type}</h1>
        <h1 className='titre'>Abilities</h1>
        <h1 className='data'>{ability}</h1>
      </div>
    </section>
  )
}

export default View;