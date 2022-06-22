class Pokemon {
  /*
id ok
name ok
sprite ok
type (tableau)        !!!!!
abilities (tableau)   !!!!!
//
base_experience
forms
game_indices
height
weight
moves
stats
//
 */


/*
on peut recoupert plusieur types de donne et les afficher
*/
    constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.sprite = data.sprites.front_default;
      this.sprite_shiny = data.sprites.front_shiny;
      this.type = data.types[0].type.name;
      this.ability = data.abilities[0].ability.name;
    }
  }
  
  export default Pokemon;