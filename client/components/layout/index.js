import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'node-fetch'

import './reset.scss'

class Layout extends Component {
  static propTypes = {
    bodyMaxWidth: PropTypes.number.isRequired,
    designWidth: PropTypes.number.isRequired,
  }

  constructor ({ bodyMaxWidth = 425, designWidth = 750 }) {
    super()

    document.body.style.maxWidth = `${bodyMaxWidth}px`

    if (designWidth) {
      const docElement = document.documentElement
      let screenWidth = docElement.clientWidth
      const htmlElement = document.getElementsByTagName('html')[0]

      if (screenWidth > bodyMaxWidth) {
        screenWidth = bodyMaxWidth
      }

      docElement.style.fontSize = `${screenWidth / designWidth * 100}px`

      const fz = docElement.style.fontSize.replace('px', '')
      const realfz = Number(+window.getComputedStyle(htmlElement).fontSize.replace('px', '') * 10000) / 10000

      if (fz !== realfz) {
        htmlElement.style.cssText = `font-size: ${fz * (fz / realfz)}px`
      }
    }
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
