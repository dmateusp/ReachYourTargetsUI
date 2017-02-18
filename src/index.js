import { Route, Router, run } from 'viewsdx-run-react'
import YesNoView from 'views/YesNo.js'
import yesNoData from 'views/YesNo.json'
import React from 'react'

const WAITING = `I'm waiting for a transaction...`

const TRANSACTIONS = [
  'tr1',
  'tr2',
  'tr3'
]

let next = 0

const getTransactions = cb => {
  setInterval(() => {
    cb(TRANSACTIONS[next++])

    if (next === TRANSACTIONS.length) {
      next = 0
    }
  }, 10000)
}

class YesNo extends React.Component {
  state = {
    answered: false,
    isWaiting: true,
    message: WAITING,
    mood: 'clown',
  }

  componentDidMount() {
    getTransactions(message => {
      this.setState({
        answered: false,
        isWaiting: true,
        message,
      })
    })
  }

  crucial = () => {
    this.setState({
      answered: 'crucial',
      isWaiting: true,
      mood: 'blush',
    })
  }

  trivial = () => {
    this.setState({
      answered: 'trivial',
      isWaiting: true,
      mood: 'crying',
    })
  }

  render() {
    const { state, props } = this

    return (
      <YesNoView
        {...state}
        {...props}
        crucial={this.crucial}
        trivial={this.trivial}
      />
    )
  }
}

const App = props => (
  <Router>
    <Route
      path='/'
      component={cprops => <YesNo {...props} {...cprops} />}
    />
  </Router>
)
run(App)
