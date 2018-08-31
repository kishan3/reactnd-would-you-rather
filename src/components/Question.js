import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { Link } from 'react-router-dom'

class Question extends Component {
    render() {
        const { question } = this.props
        const { name, avatar, text, id} = question
        console.log("questionzzzzz: ", question)
        return (
            <Link to={`question/${id}`} className="question">
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
            </Link>
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