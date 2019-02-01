import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeFilter = (event) => {
    this.setState({ filters: { type: event.target.value } })
  }

  findPets = () => {
    const { type } = this.state.filters
    const url = type === 'all'
      ? '/api/pets'
      : `/api/pets?type=${type}`
    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({ pets }))
  }

  // adoptPet = id => {
  //   const { pets } = this.state
  //   const pet = pets.find(pet => pet.id === id)
  //   pet.isAdopted = true
  //   this.setState({}) // the above code mutates the pet (by reference) but state is not rerendered. By calling state with an empty object it causes a rerender!!!!!
  // }

  // adoptPet = (id) => {
  //   const pets = [...this.state.pets] // we copy the original array
  //   const foundPet = pets.find(pet => pet.id === id)
  //   const foundPetCopy = JSON.parse(JSON.stringify(foundPet)) // convert object to a string and back to an object again to make a new DEEP CLONE object. This can be mutated without affecting state. YOU CANNOT COPY functions as JSON cannot copy functions.
  //   foundPetCopy.isAdopted = true
  //   const indexToSwap = pets.indexOf(foundPet)
  //   pets[indexToSwap] = foundPetCopy
  //   this.setState({ pets }) // there are libraries like IMMUTATBLEJS that can help with this long code.
  // }

  adoptPet = (id) => {
    const pets = this.state.pets.map(pet =>
      pet.id === id
        ? { ...pet, isAdopted: true } // this creates a NEW object via shallow copy
        : pet
    )
    this.setState({ pets })
  }

  render () {
    const { changeFilter, findPets, adoptPet } = this
    const { pets } = this.state
    // change this class into a function component all you have to do is remove 'this'.
    return (
      <div className='ui container'>
        <header>
          <h1 className='ui dividing header'>React Animal Shelter</h1>
        </header>
        <div className='ui container'>
          <div className='ui grid'>
            <div className='four wide column'>
              <Filters handleClick={findPets} handleChange={changeFilter} />
            </div>
            <div className='twelve wide column'>
              <PetBrowser pets={pets} adoptPet={adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
