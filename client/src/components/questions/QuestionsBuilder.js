import React, { Component } from 'react';
import QuestionView from './QuestionView';
import TestWithQuestions from '../tests/TestWithQuestions';
import axios from '../../../node_modules/axios';

class QuestionsBuilder extends Component {

    state = {
        scoreTotal: 0,
        numberOfScoresRecorded:0,
        totalQuestions: 0
    }

        // imperfect solution, see way to do it on this paage instead of passing it down. Maybe async, maybe component will recieve props
    componentDidMount = () =>{
        this.fetchTotalQuestions()
    }

    fetchTotalQuestions = async() =>{
        let response = await axios.get(`/api/tests/${this.props.testId}/total_questions`)
        let totalQuestions = response.data
        this.setState({totalQuestions})
        console.log("total questions", this.state.totalQuestions)
    }
    addScoreTotal = (score) =>{
        let newScore = this.state.scoreTotal + score
        this.setState({scoreTotal: newScore})
    }

    addScoreRecorded = () =>{
        let newTally = this.state.numberOfScoresRecorded + 1
        this.setState({numberOfScoresRecorded: newTally})
    }

    // setTotalQuestions = async() =>{
    // }
    render() {
        if (this.props.questions === undefined) {
            return null
        }

        const questions = this.props.questions.map((question, i)=>{
            return <QuestionView key={i}  addTallyTotalQuestions={this.addTallyTotalQuestions} addScoreRecorded={this.addScoreRecorded} addScoreTotal={this.addScoreTotal} order={i+1} question={question} snapId={this.props.snapId}/>
        })
        return (
            
            <div>
                {questions}
            </div>
        );
    }
}

export default QuestionsBuilder;