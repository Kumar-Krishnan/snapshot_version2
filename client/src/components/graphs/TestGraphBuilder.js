import React, { Component } from 'react';
import axios from 'axios'
import TestGraphView from './TestGraphView';

class TestGraphBuilder extends Component {
    state = {
        x: [],
        y: [],
        test: {},
        scoresArray:[],
        xMeasure: "Hours"
    }

    componentDidMount = () =>{
        this.fetchTestAnswers()
        this.fetchTest()
    }

    fetchTest = async() =>{
        let response = await axios.get(`/api/tests/${this.props.match.params.testId}`)
        console.log(response.data)
        this.setState({test: response.data})
    }

    fetchTestAnswers = async () =>{
        console.log(this.props.match.params.userId)
        console.log(this.props.match.params.moodId)
        let x = []
        let response = await axios.get(`/api/users/${this.props.match.params.userId}/tests/${this.props.match.params.testId}/scores`)
        let scoresArray = response.data
        let y = scoresArray.map((score)=>{
            console.log(score)
            return score.score_total
        })
        await this.setState({scoresArray})
        this.displayByHoursNonClickVersion()
        this.setState({y})
        console.log(x, y)
    }

    setXValues = (scoresArray) =>{
        
    }

    displayByHoursNonClickVersion = (event) =>{
        let x = []
        x = this.state.scoresArray.map((score)=>{
            let today = new Date()
            let todayDateTime = today.getTime()
            let scoreTime = Date.parse(score.created_at)
            let timeDiff = Math.abs(todayDateTime - scoreTime)
            let hoursDiff = Math.floor(timeDiff / (1000 * 60)*-1)
            console.log(hoursDiff)
            return hoursDiff
        })
        this.setState({x})
    } 
    displayByHours = (event) =>{
        event.preventDefault()
        let x = []
        x = this.state.scoresArray.map((score)=>{
            let today = new Date()
            let todayDateTime = today.getTime()
            let scoreTime = Date.parse(score.created_at)
            let timeDiff = Math.abs(todayDateTime - scoreTime)
            let hoursDiff = Math.floor(timeDiff / (1000 * 3600)*-1)
            console.log(hoursDiff)
            return hoursDiff
        })
        this.setState({x})
    }
    displayByDays = (event) =>{
        event.preventDefault()
        let x = []
        x = this.state.scoresArray.map((score)=>{
            let today = new Date()
            let todayDateTime = today.getTime()
            let scoreTime = Date.parse(score.created_at)
            let timeDiff = Math.abs(todayDateTime - scoreTime)
            let daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24)*-1)
                console.log(daysDiff)
                return daysDiff
        })
        this.setState({x})
    }
    displayByWeeks = (event) =>{
        event.preventDefault()
        let x = []
        x = this.state.scoresArray.map((score)=>{
            let today = new Date()
            let todayDateTime = today.getTime()
            let scoreTime = Date.parse(score.created_at)
            let timeDiff = Math.abs(todayDateTime - scoreTime)
            let weeksDiff = Math.floor(timeDiff / (1000 * 3600 * 24 * 7)*-1)
                console.log(weeksDiff)
                return weeksDiff
        })
        this.setState({x})
    }

    render() {
        return (
            <div>
                <button onClick={this.displayByHours}>
                    Measure By Hours
                </button>
                <button onClick={this.displayByDays}>
                    Measure By Days
                </button>
                <button onClick={this.displayByWeeks}>
                    Measure By Weeks
                </button>
                <TestGraphView x={this.state.x} max={this.state.test.max_score} test={this.state.test} y={this.state.y}/>
            </div>
        );
    }
}

export default TestGraphBuilder;