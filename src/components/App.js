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

  handlefindPetsClick = (query) => {
    if (query === "all") {
    return fetch("/api/pets")
    .then(response => response.json())
    .then(data => this.setState({pets: data}))
    } else {
    return fetch("/api/pets?type=" + query)
    .then(response => response.json())
    .then(data => this.setState({pets: data}))
    }
  }

  handleChangeType = (type) => {
    this.setState({ filters: {...this.state.filters, type}})
  }

  onAdoptPet = (id) => {
    let newPets = this.state.pets.map(pet => {
      if (pet.id === id) {
        pet.isAdopted = true
      }
      return pet
    })
    this.setState({ pets: newPets})
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
              <Filters
                onChangeType={this.handleChangeType}
                onFindPetsClick={() => this.handlefindPetsClick(this.state.filters.type)}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
