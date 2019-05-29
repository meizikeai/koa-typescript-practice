import React, { Component } from 'react'
import { render } from 'react-dom'

import Layout from '../../components/layout'
import minLayer from '../../components/popup-min-layer'

import './demo.css'

const layoutArgs = {
  bodyMaxWidth: 425,
  designWidth: 750,
}

const config = window.CONFIG || {}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { index: 0 }
  }

  componentWillMount () {
    // use node-fetch to Node.js and window
    fetch('/json').then(response => response.json()).then(body => {
      console.log(body)
    })
  }

  componentDidMount () {
    console.log(this.props)
  }

  handleClick = () => {
    const { index } = this.state

    minLayer.show({ content: 'I also want to look for a girlfriend...' })

    this.setState({
      index: index + 1,
    })
  }

  render () {
    const { index } = this.state

    return (
      <Layout {...layoutArgs}>
        <div className='demo'>
          <h1>Hello Demo!</h1>
          <p>Welcome to Demo!</p>
          <div className='click'>
            You clicked
            <span>{index}</span>
            times
          </div>
          <button type='button' onClick={this.handleClick}>Click me</button>
        </div>
      </Layout>
    )
  }
}

render(<App {...config} />, document.querySelector('#app'))