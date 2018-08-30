import React, { Component } from 'react';
import AnswerView from './AnswerView';

class AnswersBuilder extends Component {
    state ={
        answerChosen:{}
    }

    
    render() {
        if (this.props.answers === undefined) {
            return null
        }
        const answers = this.props.answers.map((answer, i)=>{
            return <AnswerView setAnswerClicked={this.props.setAnswerClicked} answerChosen={this.props.answerChosen} key={i}  order={i+1} answer={answer}/>
        })
        return (
            <div>
                {answers}
            </div>
        );
    }
}

export default AnswersBuilder;