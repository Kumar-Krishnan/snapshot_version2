import React, { Component } from 'react';
import QuestionView from './QuestionView';

class QuestionsBuilder extends Component {
    render() {
        if (this.props.questions === undefined) {
            return null
        }
        const questions = this.props.questions.map((question, i)=>{
            return <QuestionView key={i}  order={i+1} question={question} snapId={this.props.snapId}/>
        })
        return (
            
            <div>
                {questions}
            </div>
        );
    }
}

export default QuestionsBuilder;