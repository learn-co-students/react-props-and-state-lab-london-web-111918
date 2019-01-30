import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChangeType = event => {
  this.setState({
    filters: {type: event.target.value}
  })
  }

  handleFindPetsClick = event => {
    const query = this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`

    this.getAnimals(query)
  }

  getAnimals = query => {
    fetch(query)
    .then(response => response.json())
    .then(data => this.setState({pets: data})
    )
  }

  handleAdoptPet = petID => {
    const newPets = this.state.pets.map(singlePet => {
      if (singlePet.id === petID){
        singlePet.isAdopted = true
      }
      return singlePet
    })
      this.setState({ ...this.state,
        pets: newPets
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
