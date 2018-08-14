import React, { Component } from 'react';
import axios from 'axios'
import QuestionsBuilder from '../questions/QuestionsBuilder';
import QuestionMobileIndividualBuilder from '../questions/QuestionMobileIndividualBuilder';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'


const TestHeader = styled.div`
    text-align: center;
    font-size: 20px;
    margin-top: 15px;
`

const NavBox = styled.div`
    display: grid;
    grid-template-columns: 40vw 40vw;
    justify-content: space-around;
    text-align: center;
    margin-top: 2px;
    box-shadow: 1px 1px 1px 1px;
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
                <NavBox>
                    <div>
                    <Link to={`/users/${this.props.match.params.userId}`}>
                        <Icon name="home" size="big"/>
                    </Link>
                    </div>

                    <div>
                        <Link to={`/users/${this.props.match.params.userId}/snaps/${this.props.match.params.snapId}`}>
                            <Icon name="camera retro" size="big"/>
                        </Link>
                    </div>
                </NavBox>

                
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