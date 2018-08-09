import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

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
            
                <div>
                    {this.props.test.name}  
                    {
                        !this.state.testScoreExists ?
                            <Link to={`/users/${this.props.userId}/snaps/${this.props.snapId}/tests/${this.props.test.id}`}>
                                <h4> Take Test</h4>
                            </Link>
                        :null
                    }
                    
                    {
                        this.state.testScoreExists ?
                            <h5>{this.state.testScore.score_total}</h5>
                        :null
                    }
                </div>
            
        );
    }
}

export default TestView;