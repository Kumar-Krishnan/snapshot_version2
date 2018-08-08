import React, { Component } from 'react';
import AnswerView from './AnswerView';

class AnswersBuilder extends Component {
    state ={
        answerChosen:{}
    }

    // componentDidMount = () =>{
    //     this.fetchChosenAnswer()
    // }

    // fetchChosenAnswer = async() =>{
        
    // }
    render() {
        if (this.props.answers === undefined) {
            return null
        }
        const answers = this.props.answers.map((answer, i)=>{
            return <AnswerView key={i}  order={i+1} answer={answer}/>
        })
        return (
            <div>
                {answers}
            </div>
        );
    }
}

export default AnswersBuilder;