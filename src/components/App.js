import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login'
import Nav from './Nav'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import { connect } from 'react-redux'
import React, { Component } from 'react'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <div className="container">
        {this.props.notloggedin === true
        ? <Route exact component={Login} />
        : <div>
            <Nav />
            <Route path="/" exact component={Dashboard} />
            <Route path="/leaderboard" exact component={Leaderboard} />
            <Route path="/new" exact component={NewQuestion} />
          </div>}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({authedUser}) {
  console.log(authedUser)
  return { notloggedin : authedUser === null }
}

export default connect(mapStateToProps)(App);
