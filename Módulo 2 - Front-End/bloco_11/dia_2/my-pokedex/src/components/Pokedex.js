import React from 'react';
import Pokemon from './Pokemon';

const Pokedex = (props) => {
  const { pokemons } = props
  return(
    <div className='pokedex'>
        {pokemons.map(pokemon => <Pokemon key={pokemon.id} data={pokemon}/> )}
      </div>
  )
}

export default Pokedex;