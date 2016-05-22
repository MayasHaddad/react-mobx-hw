import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Greetings extends Component {

  render() {
    return <div>Hello, { this.props.person.name }</div>
  }
}

export default Greetings
