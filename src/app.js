import React, { Component } from 'react'

import Input from './input'
import Greetings from './greetings'

import Person from './person'

export default class App extends Component {

  person = new Person()

  render() {
    return (<div>
        <Input person={ this.person } />
        <Greetings person={ this.person } />
      </div>
    )
  }

}
