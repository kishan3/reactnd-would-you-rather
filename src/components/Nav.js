import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { unsetAuthedUser } from '../actions/authedUser'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class Nav extends Component {  
  handleLogout = (e) => {
    const { dispatch } = this.props
    dispatch(unsetAuthedUser())
  }

  render() {
    const { classes } = this.props
    const user = this.props.authedUser
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Link to="/" variant="title" color="inherit" className={classes.flex}>
              Home
            </Link>
            <Link to="/add" variant="title" color="inherit" className={classes.flex}>
              New Question
            </Link>
            <NavLink to="/leaderboard" variant="title" color="inherit" className={classes.flex}>
              Leaderboard
            </NavLink>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Hello {user} !
            </Typography>
            <Button href="/" color="inherit" onClick={this.handleLogout}>Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
function mapStateToProps({authedUser}) {
  return {
    authedUser,
  }
}

export default withStyles(styles)(connect(mapStateToProps)(Nav))