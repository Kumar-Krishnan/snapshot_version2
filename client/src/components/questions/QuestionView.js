import React, { Component } from 'react';

class QuestionView extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.question.question_text}</h3>
            </div>
        );
    }
}

export default QuestionView;