import React, { Component } from 'react';
import axios from 'axios'
import MoodBuilder from '../moods/MoodBuilder';
import TestBuilder from '../tests/TestBuilder';
// a
class SnapPage extends Component {

    state ={
        tests: []
    }

    componentDidMount = () =>{
        this.fetchAllTests()
    }

    fetchAllTests = async() =>{
        let response = await axios.get(`/api/tests`)
        console.log(response.data)
        this.setState({tests: response.data})
        console.log(this.state.moods)
    }
    render() {
        return (
            <div>
                <TestBuilder tests={this.state.tests} snapId={this.props.match.params.id}/>
            </div>
        );
    }
}

export default SnapPage;