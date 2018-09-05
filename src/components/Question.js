import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
});


class Question extends Component {
    render() {
        const { question, classes } = this.props
        const { name, avatar, text, id} = question
        
        return (
            <Link to={`question/${id}`} className="question">
                <Avatar
                    alt="Adelle Charles"
                    src={avatar}
                    className={classes.bigAvatar}
                />
                <div className="tweet-info">
                    <p>{name} asks:</p>
                    <p>....{text}....</p>
                    <Button className={classes.button} variant="contained" color="secondary">View Poll</Button>
                </div>
                
            </Link>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
    const question = questions[id]
    return {
        question: formatQuestion(question, users[question.author], authedUser)
    }
}

export default withStyles(styles)(connect(mapStateToProps)(Question))