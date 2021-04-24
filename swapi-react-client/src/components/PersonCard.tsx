import React from 'react'


function PersonCard ({name, height, mass, gender, homeworld, url, cardClicked}: any) {

    const onCardClicked = (e: any, url: string) => {
      cardClicked(url)
      e.preventDefault();
    } 

    return (
        <div className="card shadow-sm  mb-2" onClick={e => onCardClicked(e, url)}>
        <div className="card-body">
          <p>SW Character: {name}</p>
          <p>Heigh: {height}</p>
          <p>Mass: {mass}</p>
          <p>Gender: {gender}</p>
          <p>HomeWorld: {homeworld}</p>
        </div>
      </div>
    )
}


export default PersonCard;