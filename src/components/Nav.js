import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { unsetAuthedUser } from '../actions/authedUser'

class Nav extends Component {  
  handleLogout = (e) => {
    const { dispatch } = this.props
    dispatch(unsetAuthedUser())
  }

  render() {
    const user = this.props.authedUser
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' exact activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' exact activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
          <li>
            Hello {user} !
          </li>
          <li className="right">
            <NavLink to="/" onClick={this.handleLogout}>
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
function mapStateToProps({authedUser}) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(Nav)