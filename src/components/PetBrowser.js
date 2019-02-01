import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render () {
    const { pets, adoptPet } = this.props
    return <div className='ui cards'>
      {
        // For each pet pass a pet prop to the Pet component
        pets.map(singlePet => <Pet key={singlePet.id} pet={singlePet} handleClick={() => adoptPet(singlePet.id)} />)
      }
    </div>
  }
}

export default PetBrowser

/*

refactored as functional Component:

PetBrowser = (props) =>
  <div className='ui cards'>
      {
        props.pets.map(singlePet => <Pet pet={singlePet} />)
      }
    </div>

OR

PetBrowser = ({ pets }) => // ES6 destructure just pets from the props
  <div className='ui cards'>
      {
        pets.map(singlePet => <Pet pet={singlePet} />)
      }
    </div>
*/
