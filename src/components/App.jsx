import React, { Component } from 'react'
import ConnectedTasks from './modules/Tasks'
import NProgress from 'react-nprogress'

import 'react-nprogress/nprogress.css'

export default class App extends Component {

  componentWillMount() {
    NProgress.start()
  }

  componentDidMount() {
    NProgress.done()
  }

  render() {
    return ( <ConnectedTasks /> )
  }
}