import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import { loginstyles } from './ComponentCSS'

  
class Login extends Component {
    handleSubmit = (e) => {
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

export default withStyles(loginstyles)(connect()(Login))