import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { handleSaveAnswer } from '../actions/shared'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const styles = {
    card: {
      minWidth: 275,
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    cover: {
        width: 151,
        height: 151,
    },
};

  
class QuestionPage extends Component {
    handleSubmit = (e, value) => {
        e.preventDefault()
        const { question1, dispatch } = this.props
        const answer = value
        dispatch(handleSaveAnswer(question1.id, answer))
    }
    render () {
        const { question1, author, classes } = this.props
        return (
            <div className="tweet-info">
                <br/>
                
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cover}
                        image={author.avatarURL}
                        title={`Image for ${author.name}`}
                    />
                    <Typography variant="headline" component="h1">
                        {question1.author} asks:
                    </Typography>
                    <Typography variant="headline" component="h3">
                        Would You Rather:
                    </Typography>
                </Card>
                <br/>
                <Button 
                    variant="contained"
                    color="secondary"
                    value="optionOne"
                    onClick={(e) => this.handleSubmit(e, "optionOne")}>{question1.optionOne.text}</Button>
                <h3>OR</h3>
                <Button
                    variant="contained"
                    color="secondary"
                    value="optionTwo"
                    onClick={(e) => this.handleSubmit(e, "optionTwo")}>{question1.optionTwo.text}
                </Button>
            </div>
        )
    }
}


function mapStateToProps({questions, users},props) {
    const { id } = props.match.params
    const question1 = questions[id]
    const author = users[question1.author]
    return {
        question1,
        author
    }
}

export default withStyles(styles)(connect(mapStateToProps)(QuestionPage))