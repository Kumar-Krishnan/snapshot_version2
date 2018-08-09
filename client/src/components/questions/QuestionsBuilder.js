import React, { Component } from 'react';
import QuestionView from './QuestionView';

class QuestionsBuilder extends Component {

    state = {
        scoreTotal: 0,
        numberOfScoresRecorded:0,


    }

    addScoreTotal = (score) =>{
        let newScore = this.state.scoreTotal + score
        this.setState({scoreTotal: newScore})
    }

    addScoreRecorded = () =>{
        let newTally = this.state.numberOfScoresRecorded + 1
        this.setState({numberOfScoresRecorded: newTally})
    }
    render() {
        if (this.props.questions === undefined) {
            return null
        }
        const questions = this.props.questions.map((question, i)=>{
            return <QuestionView key={i}  addScoreRecorded={this.addScoreRecorded} addScoreTotal={this.addScoreTotal} order={i+1} question={question} snapId={this.props.snapId}/>
        })
        return (
            
            <div>
                {questions}
            </div>
        );
    }
}

export default QuestionsBuilder;