/*
List contient la liste des boxes pour selectioner les
pokemones
*/
import React, {useState, useEffect} from 'react';
import './styles/List.css';
/*
importation des forme de pokemones
*/
import Box from './Box';
import Add from './CRUD/Add';
/*
le etat de handleOnClick est recupere depuis App.js
*/
const List = ({ handleOnClick }) => {

  const [list, setList] = useState([]);

  useEffect(() => {
        fetchListePoke();
    }, []); 

  /*
recuperation des pokemon
*/
  const fetchListePoke = () => {
     /*
        fetch tout les pokemon sans faire des pages
    */
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(data => {
        //onsole.log(data.results);  
        
        /*
        changer le etat des setList
        */
        setList(data.results);
    })
    };

    /*
    parcurir la liste et recoupere les informations
    passer des paramatre au Box 
    */
    const boxs = list.map((list, index) => {
      //console.log(list)
      //console.log(index)
      return (
        <Box 
          key={list.id} 
          list={list} 
          index={index} 
          handleOnClick={handleOnClick}
        />
      );
    });

  /*
    parcurir la liste et recoupere les informations
    passer des paramatre au Box 
  */  
  return (
   <section className="list">
    {boxs}
    <Add/>
   </section>
  )
}

export default List;
