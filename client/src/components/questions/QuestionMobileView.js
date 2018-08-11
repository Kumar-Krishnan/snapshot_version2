import React, { Component } from 'react';
import axios from '../../../node_modules/axios';
import AnswersBuilder from '../answers/AnswersBuilder';

class QuestionMobileView extends Component {
    state = {
        answers: [],
        answerChosen: {

        },
        thereIsAnAnswerChosen: false,
        answerClicked: {
        }
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
            this.fetchAnswers()
            this.fetchChosenAnswer()
        }
    }

    setAnswerClicked = (answer) =>{
        this.setState({answerClicked: answer})
    }

    submitAnswer = async(event) =>{
        event.preventDefault()
        let answerSubmission = await axios.post(`/api/snaps/${this.props.snapId}/answers/${this.state.answerClicked.id}`)
        this.fetchChosenAnswer()
    }

    


    render() {
        return (
            <div>
                {/* <h2>{this.props.order}</h2> */}
                
                <h3>{this.props.question.question_text}</h3>

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
                    <button onClick={this.submitAnswer}>Submit Answer</button>
                    :null
                }

            </div>
        );
    }
}

export default QuestionMobileView;