import React, { Component } from 'react'
import 'node-fetch'
import flexible from '../../utils/flexible'

import '../reset/index.css'

class Layout extends Component {
  constructor () {
    super()
    this.setState = {}

    flexible(window, document)
  }

  render () {
    const { children } = this.props
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    )
  }
}

export default Layout
