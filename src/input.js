import React, { Component } from 'react'

export default class Input extends Component {

  handleInputChange = () =>
    this.props.person.name = this.refs.name.value

  render() {
    return <input type='text' ref='name' onChange={ this.handleInputChange } />
  }
}
