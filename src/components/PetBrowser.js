import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
      {
        this.props.pets.map(singlePet => <Pet pet={singlePet} key={singlePet.id} onAdoptPet={this.props.onAdoptPet} />)
      }
    </div>
    )
  }
}

export default PetBrowser
