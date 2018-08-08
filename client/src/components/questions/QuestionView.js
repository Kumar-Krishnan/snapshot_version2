import React, { Component } from 'react';

class QuestionView extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.order}</h2>
                <h3>{this.props.question.question_text}</h3>
            </div>
        );
    }
}

export default QuestionView;