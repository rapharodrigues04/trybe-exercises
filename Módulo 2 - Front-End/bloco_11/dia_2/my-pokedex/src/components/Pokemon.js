import React from 'react';

const Pokemon = (props) => {

  const { data } = props
  
  return(
    <div className='pokemon'>
      <div>
        <p>{`Name: ${data.name}`}</p>
        <p>{`Type: ${data.type}`}</p>
      </div>
      <img src={data.image} alt={data.name}/>
    </div>
  )
}

export default Pokemon