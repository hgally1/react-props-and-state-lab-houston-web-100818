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
//This callback needs to update `<App />`'s `state.filters.type`
  // onChangeType = () => {
  //   this.setState({
  //     filters: {
  //       type: this.state.filters.type
  //     }
  //   })
  // }

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  // onFetch = () => {
  //   let url = '/api/pets'
  //   if(this.state.filters.type !== 'all') {
  //     return (`url + ?type=${type}`)
  //   }
  // }
  
  onFindPetsClick = () => {
    let type = this.state.filters.type
    fetch(`/api/pets${ type !== 'all' ? `?type=${type}` : ''}`)
    .then(resp => resp.json())
    .then(pets =>{
      this.setState({ pets })
    })
  }

  //This callback should take in an id for a pet, find the matching
  // pet in state.pets and set the isAdopted property to true.
  onAdoptPet = (petId) => {
    this.setState(state => {
      let pet = this.state.pets.find(pet => (pet.id === petId))
      pet.isAdopted = true
      return state
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
              <Filters value={this.state.input} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
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
