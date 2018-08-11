import React, { Component } from 'react';
import QuestionMobileView from './QuestionMobileView';
import axios from 'axios'
import styled from 'styled-components'

const IndividualQuestions = styled.div`
    margin-top: 20 px;
    border: 4px solid red;
`

class QuestionMobileIndividualBuilder extends Component {
    state = {
        scoreTotal: 0,
        numberOfScoresRecorded:0,
        totalQuestions: 0,
        currentQuestion:0
    }

        // imperfect solution, see way to do it on this paage instead of passing it down. Maybe async, maybe component will recieve props
    componentDidMount = () =>{
        this.fetchTotalQuestions()
    }

    fetchTotalQuestions = async() =>{
        let response = await axios.get(`/api/tests/${this.props.testId}/total_questions`)
        let totalQuestions = response.data
        this.setState({totalQuestions})
    }
    addScoreTotal = (score) =>{
        let newScore = this.state.scoreTotal + score
        this.setState({scoreTotal: newScore})
    }

    addScoreRecorded = async() =>{
        let newTally = this.state.numberOfScoresRecorded + 1
        this.setState({numberOfScoresRecorded: newTally})
        if (this.state.totalQuestions === this.state.numberOfScoresRecorded && this.state.totalQuestions !== 0){
            let response = await axios.post(`/api/users/${this.props.userId}/snaps/${this.props.snapId}/tests/${this.props.testId}/test_score/${this.state.scoreTotal}`)
            this.props.push(`/users/${this.props.userId}/snaps/${this.props.snapId}`)
        }
    }

    // setTotalQuestions = async() =>{
    // }
    render() {
        if (this.props.questions[1] === undefined) {
            return null
        }

        const questions = (
            <QuestionMobileView   addTallyTotalQuestions={this.addTallyTotalQuestions} addScoreRecorded={this.addScoreRecorded} addScoreTotal={this.addScoreTotal} order={1} question={this.props.questions[0]} snapId={this.props.snapId}/>
        )
        return (
            
            <IndividualQuestions>
                {questions}
            </IndividualQuestions>
        );
    }
}

export default QuestionMobileIndividualBuilder;