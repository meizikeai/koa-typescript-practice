import React, { Component } from 'react'
import 'whatwg-fetch'
import flexible from '../../utils/flexible'

import './index.css'

class Layout extends Component {
  constructor() {
    super()
    this.setState = {}

    flexible(window, document)
  }

  render() {
    const { children } = this.props
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    )
  }
}

export default Layout
