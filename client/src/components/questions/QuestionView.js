import React, { Component } from 'react';
import axios from 'axios'
import AnswersBuilder from '../answers/AnswersBuilder';

class QuestionView extends Component {
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
        console.log(answers)
    }

    setAnswerClicked = (answer) =>{
        this.setState({answerClicked: answer})
    }

    fetchChosenAnswer = async() =>{
        let response = await axios.get(`/api/snaps/${this.props.snapId}/questions/${this.props.question.id}/answer_chosen`)
        let answerChosen = response.data[0]
        console.log("chosen answer", answerChosen)
        if (answerChosen !== undefined) {
            this.setState({answerChosen})
            this.setState({thereIsAnAnswerChosen: true})
        }
    }
    render() {
        return (
            <div>
                {/* <h2>{this.props.order}</h2> */}
                
                <h3>{this.props.question.question_text}</h3>

                {
                    this.state.thereIsAnAnswerChosen ?
                    <h5>{this.state.answerChosen.answer_text}</h5>
                    :null
                }
                
                <AnswersBuilder setAnswerClicked={this.setAnswerClicked} answerChosen={this.state.thereIsAnAnswerChosen} answers={this.state.answers}/>
            </div>
        );
    }
}

export default QuestionView;