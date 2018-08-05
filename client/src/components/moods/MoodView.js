import React, { Component } from 'react';
import axios from 'axios'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

const SubmitBox = styled.div`
    .button{
        background-color: red;
    }
`


class MoodView extends Component {

    state = {
        moodScore: {
        },
        scoreExists: true,
        scoreToBeSubmitted: 0
    }

    handleChange = (e, { value }) => this.setState({ value })


    componentDidMount = () =>{
        this.fetchSnapMoodScore()
    }
    fetchSnapMoodScore = async() =>{
        let snapId = this.props.snapId
        let moodId = this.props.mood.id
        let moodScore = await axios.get(`/api/snaps/${snapId}/moods/${moodId}/test_scores`)
        console.log(moodScore)
        if (moodScore.data.name !== "fail"){
            this.setState({moodScore: moodScore.data[0]})
            this.setState({scoreExists: true})
        }
        else{
            let noScore = {...this.state.moodScore}
            noScore.score = "no score"
            this.setState({moodScore: noScore})
            this.setState({scoreExists: false})
        }
        console.log(this.state.moodScore)
    }

    setScoreToBeSubmitted= (event) =>{
        event.preventDefault()
        let newScore = event.target.value
        this.setState({scoreToBeSubmitted: newScore})
        console.log(this.state.scoreToBeSubmitted)
    }

    setScoreAsFinal = async (event) =>{
        event.preventDefault()
        let moodId = this.props.mood.id
        let snapId = this.props.snapId
        let moodScore = this.state.scoreToBeSubmitted
        let waiter = await axios.post(`/api/snaps/${snapId}/moods/${moodId}/${moodScore}`)
        this.fetchSnapMoodScore()
    }

    render() {
        const moodScoreShowOrInputScore = () =>{
        }

        return (


            <div>
                <h1>{this.props.mood.name}</h1>
                {
                    this.state.scoreExists ?
                    <h5>{this.state.moodScore.score}</h5>
                    : null
                }
                {
                    !this.state.scoreExists ?
                    <SubmitBox>
                        <Button onClick={this.setScoreToBeSubmitted} value={1} className="button1">1</Button>
                        <Button onClick={this.setScoreToBeSubmitted} value={2}>2</Button>
                        <Button onClick={this.setScoreToBeSubmitted} value={3}>3</Button>
                        <Button onClick={this.setScoreToBeSubmitted} value={4}>4</Button>
                        <Button onClick={this.setScoreToBeSubmitted} value={5}>5</Button>
                        <Button onClick={this.setScoreToBeSubmitted} value={6}>6</Button>
                        <Button onClick={this.setScoreToBeSubmitted} value={7}>7</Button>
                        <Button onClick={this.setScoreToBeSubmitted} value={8}>8</Button>
                        <Button onClick={this.setScoreToBeSubmitted} value={9}>9</Button>
                        <Button onClick={this.setScoreToBeSubmitted} value={10}>10</Button>
                        <Button onClick={this.setScoreAsFinal}>Submit Score</Button>
                    </SubmitBox>
                    : null
                }
                
                
            </div>
        );
    }
}

export default MoodView;