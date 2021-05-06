// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  
  state = {
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state);
    console.log(this.state.name)
    this.setState({
      name: ''
    })
  }

  handleInput = event => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type='text' onChange={event => this.handleInput(event)} value={this.state.name}></input>
          <button type='submit'>Add Band</button>
        </form>
      </div>
    )
  }
}

export default BandInput
