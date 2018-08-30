import React, { Component } from 'react';
import axios from '../../../node_modules/axios';
import AnswersBuilder from '../answers/AnswersBuilder';
import styled from 'styled-components'
import { Progress } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'


const QuestionBox = styled.div`
    text-align: center;
    margin-bottom: 10px;
`

const SubmitBox = styled.div`
    text-align: center;
    margin-top: 20px;
`
const Warning = styled.h4`
    color: red;
`

class QuestionMobileView extends Component {
    state = {
        answers: [],
        answerChosen: {

        },
        thereIsAnAnswerChosen: false,
        answerClicked: {
            value: 0
        },
        previousAnswer: {
        },
        percent: 33,
        triedToSubmitEmptyAnswer: false 
    }

    
    componentDidMount = () =>{
        this.fetchAnswers()
        this.fetchChosenAnswer()
    }

    fetchAnswers = async() =>{
        let response = await axios.get(`/api/questions/${this.props.question.id}/answers`)
        let answers = response.data
        this.setState({answers})
    }


    fetchChosenAnswer = async() =>{
        let response = await axios.get(`/api/snaps/${this.props.snapId}/questions/${this.props.question.id}/answer_chosen`)
        let answerChosen = response.data[0]
        if (answerChosen !== undefined) {
            this.setState({answerChosen})
            this.props.addScoreTotal(answerChosen.answer_value)
            this.props.addScoreRecorded()
            this.props.moveToNextQuestion()
            if(this.props.lastQuestion !== true){
                this.fetchAnswers()
                this.fetchChosenAnswer()
            }   
        }
    }

    setAnswerClicked = (answer) =>{
        this.setState({answerClicked: answer})
    }

    submitAnswer = async(event) =>{
        event.preventDefault()
        if (this.state.answerClicked !== this.state.previousAnswer && this.state.answerClicked.value !== 0) {
            this.setState({previousAnswer: this.state.answerClicked})
            let answerSubmission = await axios.post(`/api/snaps/${this.props.snapId}/answers/${this.state.answerClicked.id}`)
            this.fetchChosenAnswer()
            if (this.state.triedToSubmitEmptyAnswer === true){
                this.setState({triedToSubmitEmptyAnswer: false})
            }
        }
        else{
            this.setState({triedToSubmitEmptyAnswer: true})
        }
    }

    


    render() {
    
        return (
            <div>                
                <Progress value={this.props.currentQuestion+1} total={this.props.totalQuestions} progress='ratio' success />

                {
                    this.state.triedToSubmitEmptyAnswer ?
                    <Warning>Please choose one of the answers below first.</Warning>
                    :null
                }
                <QuestionBox>
                    <h3>{this.props.question.question_text}</h3>
                </QuestionBox>
                {
                    this.state.thereIsAnAnswerChosen ?
                    <div>
                        <h6>{this.props.currentQuestion}</h6>
                        <h5>{this.state.answerChosen.answer_text}</h5>
                    </div>
                    :null
                }
                
                <AnswersBuilder setAnswerClicked={this.setAnswerClicked} answerChosen={this.state.thereIsAnAnswerChosen} answers={this.state.answers}/>
                {
                   !this.state.thereIsAnAnswerChosen ? 
                    <SubmitBox>
                            <Button positive onClick={this.submitAnswer}>Submit Answer</Button>
                    </SubmitBox>
                    :null
                }

            </div>
        );
    }
}

export default QuestionMobileView;