import React from 'react'


function PersonCard (props: any) {
    return (
        <div className="card shadow-sm  mb-2">
        <div className="card-body">
          <p>Trooper: {props.name}</p>
          <p>Heigh: {props.height}</p>
          <p>Mass: {props.mass}</p>
          <p>Gender: {props.gender}</p>
          <p>HomeWorld: {props.homeworld}</p>
        </div>
      </div>
    )
}


export default PersonCard;