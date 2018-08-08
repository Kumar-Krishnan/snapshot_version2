import React, { Component } from 'react';
import axios from 'axios'
import AnswersBuilder from '../answers/AnswersBuilder';

class QuestionView extends Component {
    state = {
        answers: []
    }

    componentDidMount = () =>{
        this.fetchAnswers()
    }

    fetchAnswers = async() =>{
        let response = await axios.get(`/api/questions/${this.props.question.id}/answers`)
        let answers = response.data
        this.setState({answers})
        console.log(answers)
    }
    render() {
        return (
            <div>
                {/* <h2>{this.props.order}</h2> */}
                <h3>{this.props.question.question_text}</h3>
                <AnswersBuilder answers={this.state.answers}/>
            </div>
        );
    }
}

export default QuestionView;