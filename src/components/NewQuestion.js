import React, { Component } from 'react'
import { handleAddQuestion } from '../actions/questions'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
      },
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
})

class NewQuestion extends Component {
    state = {
        option_one_text: "",
        option_two_text: "",
        toHome: false,
    }

    handleChange = (e) => {
        const text = e.target.value
        if (e.target.name === 'option_one') {
            this.setState(() => ({
                option_one_text: text
            }))
        }
        else {
            this.setState(() => ({
                option_two_text: text
            }))
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { option_one_text, option_two_text } = this.state
        const { dispatch } = this.props

        dispatch(handleAddQuestion(option_one_text, option_two_text))

        this.setState(() => ({
            option_one_text: '',
            option_two_text: '',
            toHome: true,
        }))
    }

    render(){
        const { option_one_text, option_two_text, toHome } = this.state
        const { classes } = this.props
        if (toHome) {
            return <Redirect to="/" />
        }
        return(
            <div>
                <h3 className="center">
                    Create New Question
                </h3>
                <form className="new-question">
                    <h4>Complete the question:</h4>
                    <h4>Would you rather:</h4>
                    <input 
                        placeholder="Enter option one text."
                        value={option_one_text}
                        name="option_one"
                        onChange={this.handleChange}
                        className="inputarea"
                    />
                    <p>OR</p>   
                    <input 
                        placeholder="Enter option two text."
                        value={option_two_text}
                        name="option_two"
                        onChange={this.handleChange}
                        className="inputarea"
                    />
                    <Button
                        variant="contained"
                        color="secondary" 
                        onClick={this.handleSubmit}
                        className={classes.button}
                        disabled= {option_one_text === '' || option_two_text === ''}>
                    Submit
                    </Button>
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(connect()(NewQuestion))