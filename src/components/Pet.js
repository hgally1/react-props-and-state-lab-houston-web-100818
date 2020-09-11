import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            <p>Gender: {this.props.pet.gender === 'female' ? 'female ♀' : 'male ♂'}</p>
            <p>Name: {this.props.pet.name}</p>
          </a>
          <div className="meta">
            <span className="date">
              <p>Type: {this.props.pet.type} </p>
            </span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} years</p>
            <p>Weight: {this.props.pet.weight} lbs</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted === true ? 
          <button className="ui disabled button">Already adopted</button> :
          <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
