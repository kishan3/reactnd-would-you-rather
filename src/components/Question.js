import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

class Question extends Component {
    render() {
        const { question } = this.props
        const { name, avatar, text } = question
        console.log("questionzzzzz: ", question)
        return (
            <div className="question">
                <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className="avatar"
                />
                <div className="tweet-info">
                    <p>{name} asks:</p>
                    <p>....{text}....</p>
                </div>
                <button className="btn btn-hover btn-focus">View Poll</button>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
    const question = questions[id]
    console.log("question:", question)
    return {
        question: formatQuestion(question, users[question.author], authedUser)
    }
}

export default connect(mapStateToProps)(Question)