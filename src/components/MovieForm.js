import React, { Component } from 'react'

const initialState = {
  name: '',
  image: '',
}

export default class MovieForm extends Component {
  
  state = initialState

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addMovie(this.state)
    this.setState(initialState)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add New Movie</h2>
        <label>Name</label>
        <input onChange={this.handleChange} type='text' name='name' value={this.state.name} />
        <label>Image</label>
        <input onChange={this.handleChange} type='text' name='image' value={this.state.image} />
        <input type='submit' />
      </form>
    )
  }
}