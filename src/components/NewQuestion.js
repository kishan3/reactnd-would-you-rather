import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
    state = {
        option_one_text: "",
        option_two_text: "",
        toHome: false,
    }

    handleChange = (e) => {
        const text = e.target.value
        console.log(e.target.name)
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
        e.prevenDefault()
        const { option_one_text, option_two_text } = this.state
        const { dispatch, id } = this.props

        dispatch(handleAddQuestion(option_one_text, option_two_text))

        this.setState(() => ({
            text: '',
            toHome: id ? false: true,
        }))
    }
    render(){
        const { option_one_text, option_two_text, toHome } = this.state
        // if (toHome) {
        //     return <Redirect to="/" />
        // }
        
        return(
            <div>
                <h3 className="center">
                    Create New Question
                </h3>
                <form className="new-question" onSubmit={this.handleSubmit}>
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
                    <button
                        className="btn btn:hover btn:focus"
                        type="submit"
                        disabled= {option_one_text === '' || option_two_text === ''}
                    >Submit</button>
                </form>
            </div>
        )
    }
}

export default NewQuestion