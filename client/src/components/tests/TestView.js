import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const TestBox = styled.div`
    font-size: 20px;
    text-align: center;
    margin-bottom: 15px;
`
const Wrapper = styled.div `
    text-align: center;
    border: 1px solid black;
    margin-top: 15px;
    margin-left: 5px;
    margin-right: 10px;
    box-shadow: 1px 1px 1px 1px;
    padding-bottom: 10px;
`

class TestView extends Component {

    state = {
        testScore: {
        },
        testScoreExists: false
    }

    componentDidMount = () =>{
        this.fetchTestScore()
    }

    fetchTestScore = async() =>{
        let response = await axios.get(`/api/snaps/${this.props.snapId}/${this.props.test.id}/testscore`)
        let testScore = response.data[0]
        console.log("test score", response)
        
        if (testScore !== undefined){
            this.setState({testScore})
            this.setState({testScoreExists: true})
        }
    }
    render() {
        return (
            
                <Wrapper>
                    <br/>
                    <TestBox>
                        {this.props.test.name}
                    </TestBox> 
                    {
                        !this.state.testScoreExists ?
                            <Link to={`/users/${this.props.userId}/snaps/${this.props.snapId}/tests/${this.props.test.id}`}>
                                <h4> Take the Test</h4>
                            </Link>
                        :null
                    }
                    
                    {
                        this.state.testScoreExists ?
                            <h4>You scored {this.state.testScore.score_total} out of {this.props.test.max_score}</h4>
                        :null
                    }
                </Wrapper>
            
        );
    }
}

export default TestView;