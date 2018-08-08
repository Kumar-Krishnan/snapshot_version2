import React, { Component } from 'react';

class AnswerView extends Component {

    render() {
        return (
            <div>
                {this.props.answer.answer_text}
            </div>
        );
    }
}

export default AnswerView;