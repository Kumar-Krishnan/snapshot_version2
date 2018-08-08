import React, { Component } from 'react';
import axios from 'axios'

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
                
            </div>
        );
    }
}

export default TestWithQuestions;