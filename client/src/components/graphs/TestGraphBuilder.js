import React, { Component } from 'react';

class TestGraphBuilder extends Component {
    state = {
        x: [],
        y: [],
        test: {}
    }

    componentDidMount = () =>{
        this.fetchTestAnswers()
        this.fetchTest()
    }

    fetchTest = async() =>{
        let response = await axios.get(`/api/moods/${this.props.match.params.moodId}`)
        console.log(response.data)
        this.setState({test: response.data})
    }

    fetchTestAnswers = async () =>{
        console.log(this.props.match.params.userId)
        console.log(this.props.match.params.moodId)
        let response = await axios.get(`/api/users/${this.props.match.params.userId}/moods/${this.props.match.params.moodId}/test_scores`)
        let scoresArray = response.data
        let y = scoresArray.map((score)=>{
            console.log(score)
            return score.score
        })
        let x = scoresArray.map((score)=>{
            let today = new Date()
            let todayDateTime = today.getTime()
            let scoreTime = Date.parse(score.created_at)
            let timeDiff = Math.abs(todayDateTime - scoreTime)
            let minsDiff = Math.floor(timeDiff / (1000 * 3600)*-1)
            console.log(minsDiff)
            return minsDiff
        })
        this.setState({x,y})
        console.log(x, y)
    }
    render() {
        return (
            <div>
                <MoodGraphDisplay x={this.state.x} test={this.state.test} y={this.state.y}/>
            </div>
        );
    }
}

export default TestGraphBuilder;