import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
    handleSubmit = (e) => {
        console.log(e.target.value)
        const { dispatch } = this.props
        const AUTHED_ID = e.target.value
        dispatch(setAuthedUser(AUTHED_ID))
    }

    render(){
        return(
            <div>
                <h3 className="center">Login With Following Dropdown</h3>
                <div className="center">
                    <select onChange={this.handleSubmit}>
                        <option value="" selected disabled>Select User</option>
                        <option value="tylermcginnis">tylermcginnis</option>
                        <option value="johndoe">johndoe</option>
                        <option value="sarahedo">sarahedo</option>
                    </select>
                </div>
                
            </div>
        )
    }
}

export default connect()(Login)