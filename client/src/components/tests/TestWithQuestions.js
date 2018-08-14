import React, { Component } from 'react';
import axios from 'axios'
import QuestionsBuilder from '../questions/QuestionsBuilder';
import QuestionMobileIndividualBuilder from '../questions/QuestionMobileIndividualBuilder';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const TestHeader = styled.div`
    text-align: center;
    font-size: 20px;
    margin-top: 15px;
`

class TestWithQuestions extends Component {
    state ={
        questions: [],
        test: {
            name: ""
        }
    }

    componentDidMount = () =>{
        this.fetchQuestions()
        this.fetchTest()
    }

    fetchQuestions = async() =>{
        let response = await axios.get(`/api/tests/${this.props.match.params.testId}/questions`)
        let questions = response.data
        this.setState({questions})
        console.log(questions)
    }

    fetchTest = async() =>{
        let response = await axios.get(`/api/tests/${this.props.match.params.testId}`)
        let test = response.data
        this.setState({test})
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
                {/* <QuestionsBuilder push={this.props.history.push} userId={this.props.match.params.userId} testId={this.props.match.params.testId} snapId={this.props.match.params.snapId} questions={this.state.questions}/> */}
                <TestHeader>
                    {this.state.test.name}
                </TestHeader>
                <QuestionMobileIndividualBuilder push={this.props.history.push} userId={this.props.match.params.userId} testId={this.props.match.params.testId} snapId={this.props.match.params.snapId} questions={this.state.questions}/>
            </div>
        );
    }
}

export default TestWithQuestions;