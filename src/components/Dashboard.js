import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import { dashboardstyles } from './ComponentCSS'


function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
}

class Dashboard extends Component {
    state = {
        value: 0,
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render(){
        const { questionIds, answeredQuestionsIds } = this.props
        const { value } = this.state;
        return(
            <div className="center">
                <Tabs value={value} onChange={this.handleChange}>
                    <Tab label="Unanswered Questions" />
                    <Tab label="Answered Questions" />
                </Tabs>
                {value === 0 && 
                    <TabContainer>
                        <ul>
                            {questionIds.map((id) => (
                                <li key={id}>
                                    <Question id={id} />
                                </li>
                            ))}
                        </ul>
                    </TabContainer>}
                {value === 1 && 
                    <TabContainer>
                        <ul>
                            {answeredQuestionsIds.map((id) => (
                                <li key={id}>
                                    <Question id={id} />
                                </li>
                            ))}
                        </ul>
                    </TabContainer>}
                
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}) {
    const answeredQuestionsIds = Object.keys(users[authedUser].answers)
    const allQuestions = Object.keys(questions)
    const unansweredQuestionIds = allQuestions.filter((q) => !answeredQuestionsIds.includes(q))
    return {
        questionIds: unansweredQuestionIds,
        answeredQuestionsIds: answeredQuestionsIds
    }
}

export default withStyles(dashboardstyles)(connect(mapStateToProps)(Dashboard))