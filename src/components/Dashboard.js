import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
    render(){
        return(
            <div className="center">
                <h3 className="left">Unanswered Questions</h3>
                <h3 className="right">Answered Questions</h3>
                <ul>
                    {this.props.questionIds.map((id) => (
                        <li key={id}>
                            <Question id={id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions}) {
    return {
        questionIds: Object.keys(questions)
    }
}

export default connect(mapStateToProps)(Dashboard)