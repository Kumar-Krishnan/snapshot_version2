import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import styled from 'styled-components' 

const Wrapper = styled.div`
    margin-bottom: 8px;
`

class AnswerView extends Component {

    triggerSetAnswerClicked = (event) =>{
        event.preventDefault()
        this.props.setAnswerClicked(this.props.answer)
    }
    render() {
        return (
            <Wrapper>
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
                
            </Wrapper>
        );
    }
}

export default AnswerView;