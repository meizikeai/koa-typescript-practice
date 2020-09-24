import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'

import Layout from '@components/layout'
import LayoutPC from '@components/layout-pc'
import MinLayer from '@components/popup-min-layer'

import './index.scss'

const config = window.CONFIG || {}

class App extends Component {
  static propTypes = {
    device: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }

  componentDidMount() {
    fetch('/json').then(response => response.json()).then(res => {
      console.log(res)
    })
  }

  handleClick = () => {
    const { index } = this.state

    MinLayer.show({ content: 'I also want to look for a girlfriend...' })

    console.log('test console.log')

    this.setState({
      index: index + 1,
    })
  }

  mainContent = () => {
    const { index } = this.state
    const { device } = this.props

    return (
      <div className={`${device ? 'demo-pc' : 'demo'}`}>
        <h1>Hello Demo!</h1>
        <p>Welcome to Demo!</p>
        <div className='click'>
          You clicked
          <span>{index}</span>
          times
        </div>
        <button type='button' onClick={this.handleClick}>Click me</button>
      </div>
    )
  }

  render() {
    const { device } = this.props

    return (
      <div className='wrapper'>
        {device ? <Layout>{this.mainContent()}</Layout> : <LayoutPC>{this.mainContent()}</LayoutPC>}
      </div>
    )
  }
}

render(<App {...config} />, document.querySelector('#app'))
