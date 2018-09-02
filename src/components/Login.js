import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
  });
  
class Login extends Component {
    handleSubmit = (e) => {
        console.log(e.target.value)
        const { dispatch } = this.props
        const AUTHED_ID = e.target.value
        dispatch(setAuthedUser(AUTHED_ID))
    }

    render(){
        const { classes } = this.props

        return(
            <div>
                <h3 className="center">Login With Following Dropdown</h3>
                <div className="center" id="select_user">
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-simple">Select User</InputLabel>
                        <Select
                            value=""
                            inputProps={{
                                name: 'Select User',
                                id: "select_user"
                            }}
                            onChange={this.handleSubmit}>
                            <MenuItem value="tylermcginnis">tylermcginnis</MenuItem>
                            <MenuItem value="johndoe">johndoe</MenuItem>
                            <MenuItem value="sarahedo">sarahedo</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                
            </div>
        )
    }
}

export default withStyles(styles)(connect()(Login))