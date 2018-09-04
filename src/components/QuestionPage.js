import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const styles = {
    card: {
      minWidth: 275,
    },
};

  
class QuestionPage extends Component {
    
    render () {
        const { question1, classes } = this.props
        return (
            <div className="tweet-info">
                <p>{question1.author} asks:</p>
                 <Card className={classes.card}>
                    <CardContent>
                        {question1.optionOne.text}
                    </CardContent>
                </Card>
                <h3>OR</h3>
                <Card className={classes.card}>
                    <CardContent>
                        {question1.optionTwo.text}
                    </CardContent>
                </Card>
            </div>
        )
    }
}


function mapStateToProps({questions},props) {
    const { id } = props.match.params
    const question1 = questions[id]
    return {
        question1,
    }
}

export default withStyles(styles)(connect(mapStateToProps)(QuestionPage))