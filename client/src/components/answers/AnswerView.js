import React, { Component } from 'react';
import styled from 'styled-components'

const ClickableAnswers = styled.div`
    border: 1px solid black
`
class AnswerView extends Component {

    triggerSetAnswerClicked = (event) =>{
        event.preventDefault()
        this.props.setAnswerClicked(this.props.answer)
    }
    render() {
        return (
            <div>
                {
                    this.props.answerChosen ?
                        <h4>{this.props.answer.answer_text}</h4>
                    :null
                }

                {
                    !this.props.answerChosen ?
                        <ClickableAnswers>
                            <h3 onClick={this.triggerSetAnswerClicked}>{this.props.answer.answer_text}</h3>
                        </ClickableAnswers>      
                    :null
                }
                
            </div>
        );
    }
}

export default AnswerView;