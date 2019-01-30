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

  handleOnChangeType = (e) => {
    this.setState({ filters: { type: e.target.value } })
  }

  handleOnFindPetsClick = () => {
    const query = this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`;

    this.state.filters.type && this.getAnimals(query)
  }

  getAnimals = (query) => {
    fetch(query)
      .then(resp => resp.json())
      .then(data => this.setState({ pets: data }))
  }

  handleOnAdoptPet = (id) => {
    // const pet = this.state.pets.find(pet => pet.id === id)
    // pet.isAdopted = true
    // this.setState({ pets: Object.assign([], this.state.pets, pet) })
    const newPets = this.state.pets.map(pet => {
      if (pet.id === id) {
        pet.isAdopted = true
      }
      return pet
    })

    this.setState({ pets: newPets })
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
              <Filters onChangeType={this.handleOnChangeType} onFindPetsClick={this.handleOnFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleOnAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
