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

  changeFilter = (event) => {
    this.setState(
      { filters: {
        type: event.target.value
      }
    })
  }

  getPets = (input) => {
    let opt
    if (input === 'all'){
      opt = ""
    }
    else if (input === 'cat'){
      opt = '?type=cat'
    }
    else if (input === 'dog'){
      opt = '?type=dog'
    }
    else if (input === 'micropig'){
      opt = '?type=micropig'
    }
    return fetch('/api/pets'+ opt)
      .then(response => response.json())
      .then(json => {
        this.setState({pets: json})
      })
  }

  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p
    })
    this.setState({ pets })
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
                onChangeType={(event) => {
                  event.persist()
                  this.changeFilter(event)
                }}
                onFindPetsClick={() => this.getPets(this.state.filters.type)}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
                  onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
