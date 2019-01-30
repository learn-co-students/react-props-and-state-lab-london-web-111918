import React from 'react'

import Pet from './Pet'

/*Functional Component*/
const PetBrowser = props => {
  return <div className="ui cards">
    {
      props.pets.map(singlePet => 
      <Pet 
        key={singlePet.id}
        pet={singlePet}
        onAdoptPet={props.onAdoptPet}
      />
      )
    }
  </div>
}

export default PetBrowser
