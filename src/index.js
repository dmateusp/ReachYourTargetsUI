import { Route, Router, run } from 'viewsdx-run-react'
import HomeView from 'views/Home.js'
import React from 'react'

class Home extends React.Component {
  state = {
    isFeelingHappy: true,
    isFeelingSad: false,
    isFeelingVeryBad: false,
  }

  changeMood = () => {
    this.setState({
      isFeelingHappy: false,
      isFeelingSad: true,
    })
  }

  render() {
    const { state } = this

    return (
      <HomeView
        {...state}
        changeMood={this.changeMood}
      />
    )
  }
}

const App = props => (
  <Router>
    <Route
      path='/'
      component={Home}
      height={props.height}
      width={props.width}
    />
  </Router>
)
run(App)
