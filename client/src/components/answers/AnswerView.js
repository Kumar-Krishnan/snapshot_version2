import React, { Component } from 'react';
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

const ClickableAnswers = styled(Button)`
    &&&{
        display:block;
        background-color: rgb(200,200,200);
    }
   
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
                        <Button fluid onClick={this.triggerSetAnswerClicked}>
                            <h3>{this.props.answer.answer_text}</h3>
                        </Button>      
                    :null
                }
                
            </div>
        );
    }
}

export default AnswerView;