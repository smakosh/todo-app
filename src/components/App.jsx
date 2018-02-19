import React, { Component } from 'react'
import ConnectedTasks from './task/tasks'
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
    return (
      <div>
        <ConnectedTasks />
      </div>
    )
  }
}