import React, { Component } from 'react';
import axios from 'axios'
import QuestionsBuilder from '../questions/QuestionsBuilder';
import QuestionMobileIndividualBuilder from '../questions/QuestionMobileIndividualBuilder';

class TestWithQuestions extends Component {
    state ={
        questions: []
    }

    componentDidMount = () =>{
        this.fetchQuestions()
    }

    fetchQuestions = async() =>{
        let response = await axios.get(`/api/tests/${this.props.match.params.testId}/questions`)
        let questions = response.data
        this.setState({questions})
        console.log(questions)
    }
    render() {
        return (
            <div>
                <QuestionsBuilder push={this.props.history.push} userId={this.props.match.params.userId} testId={this.props.match.params.testId} snapId={this.props.match.params.snapId} questions={this.state.questions}/>
                <QuestionMobileIndividualBuilder push={this.props.history.push} testId={this.props.match.params.testId} userId={this.props.match.params.userId} testId={this.props.match.params.testId} snapId={this.props.match.params.snapId} questions={this.state.questions}/>
            </div>
        );
    }
}

export default TestWithQuestions;