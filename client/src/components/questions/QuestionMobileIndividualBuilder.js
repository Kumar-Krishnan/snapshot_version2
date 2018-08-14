import React, { Component } from 'react';
import QuestionMobileView from './QuestionMobileView';
import axios from 'axios'
import styled from 'styled-components'

const IndividualQuestions = styled.div`
    margin-top: 20 px;
`

class QuestionMobileIndividualBuilder extends Component {
    state = {
        scoreTotal: 0,
        numberOfScoresRecorded:0,
        totalQuestions: 0,
        currentQuestion:0,
        lastQuestion: false,
        progress: 0
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
        this.setProgressBar()
        if (this.state.totalQuestions === this.state.numberOfScoresRecorded && this.state.totalQuestions !== 0){
            let response = await axios.post(`/api/users/${this.props.userId}/snaps/${this.props.snapId}/tests/${this.props.testId}/test_score/${this.state.scoreTotal}`)
            this.props.push(`/users/${this.props.userId}/snaps/${this.props.snapId}`)
        }
    }

    setProgressBar = () =>{
        let total = this.state.totalQuestions
        let current = this.state.currentQuestion + 1
        let progress = (current/total) * 100
        this.setState({progress})
    }

    moveToNextQuestion = () =>{
        // zero indexed current question vs total is not zero indexed.
        if(this.state.currentQuestion +1 !== this.state.totalQuestions){
            let newQuestion = this.state.currentQuestion + 1
            this.setState({currentQuestion: newQuestion})
        }
        else{
            this.setState({lastQuestion:true})
        }
        
    }

    // setTotalQuestions = async() =>{
    // }
    render() {
        if (this.props.questions[1] === undefined) {
            return null
        }

        const questions = (
            <QuestionMobileView  percent={this.state.progress} lastQuestion={this.state.lastQuestion} questionNumber={this.state.currentQuestion} addTallyTotalQuestions={this.addTallyTotalQuestions} moveToNextQuestion={this.moveToNextQuestion} addScoreRecorded={this.addScoreRecorded} addScoreTotal={this.addScoreTotal} question={this.props.questions[this.state.currentQuestion]} snapId={this.props.snapId}/>
        )
        return (
            
            <IndividualQuestions>
                {questions}
            </IndividualQuestions>
        );
    }
}

export default QuestionMobileIndividualBuilder;