import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

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
});

class Dashboard extends Component {
    render(){
        const { classes } = this.props
        return(
            <div className="center">
                <Button variant="contained" className={classes.button}>
                    Unanswered Questions
                </Button>
                <Button variant="contained" color="primary" className={classes.button}>
                    Answered Questions
                </Button>
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

function mapStateToProps({questions, users, authedUser}) {
    console.log("authed: ", Object.keys(users[authedUser].answers))
    const answeredQuestionsIds = Object.keys(users[authedUser].answers)
    console.log(answeredQuestionsIds)
    const unansweredQuestionIds = [questions].filter((q) => !answeredQuestionsIds.includes(q.id))[0]
    console.log(unansweredQuestionIds)
    return {
        questionIds: Object.keys(unansweredQuestionIds)
    }
}

export default withStyles(styles)(connect(mapStateToProps)(Dashboard))