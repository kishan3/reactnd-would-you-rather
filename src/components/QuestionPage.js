import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { handleSaveAnswer } from '../actions/shared'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { questionpagestyles } from './ComponentCSS'
import { Redirect } from 'react-router-dom'
import {Doughnut} from 'react-chartjs-2'
  
class QuestionPage extends Component {
    handleSubmit = (e, value) => {
        e.preventDefault()
        const { question1, dispatch } = this.props
        const answer = value
        dispatch(handleSaveAnswer(question1.id, answer))
    }

    getChartData () {
        const { question1 } = this.props
        if (question1 === undefined) {
            return null
        }
        return ({
            labels: [question1.optionOne.text, question1.optionTwo.text],
            datasets: [{
                label: '# of Votes',
                data: [question1.optionOne.votes.length, question1.optionTwo.votes.length],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 3
            }]
        })
    }
    
    isAnswered() {
        const {users, authedUser, question1} = this.props
        if(users[authedUser].answers[question1.id]){
          return true
        }
        return false
    }

    whichOptionSelected() {
        const {users, authedUser, question1} = this.props
        console.log("Option: ", users[authedUser].answers[question1.id])
        if(users[authedUser].answers[question1.id]){
          return users[authedUser].answers[question1.id]
        }
        return null
    }

    render () {
        const { question1, author, classes } = this.props
        var data = this.getChartData()
        return (
            <div className="tweet-info">
                <br/>
                {question1 === undefined
                ?
                    <Redirect to="/notfound" />
                :
                <div>
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
                    <button
                        className={this.whichOptionSelected() === "optionOne" ? "selection" : ""}
                        value="optionOne"
                        disabled={this.isAnswered() === true}
                        onClick={(e) => this.handleSubmit(e, "optionOne")}>{question1.optionOne.text}</button>
                    <h3>OR</h3>
                    
                    <button
                        className={this.whichOptionSelected() === "optionTwo" ? "selection" : ""}
                        value="optionTwo"
                        disabled={this.isAnswered() === true}
                        onClick={(e) => this.handleSubmit(e, "optionTwo")}>{question1.optionTwo.text}
                    </button>
                    {this.isAnswered() === true 
                    ? <Doughnut data={data} />
                    : null}
                    
                </div>
                }
            </div>
        )
    }
}


function mapStateToProps({questions, authedUser, users},props) {
    const { id } = props.match.params
    const question1 = questions[id]
    var author = null;
    if (question1 !== undefined) {
        author = users[question1.author]
    }
    return {
        question1,
        author,
        users,
        authedUser
    }
}

export default withStyles(questionpagestyles)(connect(mapStateToProps)(QuestionPage))