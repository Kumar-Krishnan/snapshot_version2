import React, { Component } from 'react';
import axios from 'axios'
import QuestionsBuilder from '../questions/QuestionsBuilder';

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
                <QuestionsBuilder snapId={this.props.match.params.snapId} questions={this.state.questions}/>
            </div>
        );
    }
}

export default TestWithQuestions;