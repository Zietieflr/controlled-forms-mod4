import React from 'react' 

export default function MovieCard(props) {
  return (
    <li>
      <h2>{props.name}</h2>
      <img src={props.image} alt={`${props.name} Poster`} /> 
    </li>
  )
}