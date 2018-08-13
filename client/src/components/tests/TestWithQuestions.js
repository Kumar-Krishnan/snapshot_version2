import React, { Component } from 'react';
import axios from 'axios'
import QuestionsBuilder from '../questions/QuestionsBuilder';
import QuestionMobileIndividualBuilder from '../questions/QuestionMobileIndividualBuilder';
import {Link} from 'react-router-dom'

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
                <Link to={`/users/${this.props.match.params.userId}`}>
                    Back to Profile Page
                </Link>
                <br/>
                <Link to={`/users/${this.props.match.params.userId}/snaps/${this.props.match.params.snapId}`}>
                    Back to Snap Page
                </Link>
                <QuestionsBuilder push={this.props.history.push} userId={this.props.match.params.userId} testId={this.props.match.params.testId} snapId={this.props.match.params.snapId} questions={this.state.questions}/>
                <QuestionMobileIndividualBuilder push={this.props.history.push} testId={this.props.match.params.testId} userId={this.props.match.params.userId} testId={this.props.match.params.testId} snapId={this.props.match.params.snapId} questions={this.state.questions}/>
            </div>
        );
    }
}

export default TestWithQuestions;