import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserTestScoresLinker extends Component {
    state = {
        tests: []
    }

    componentDidMount = () =>{
        this.fetchTests()
    }

    fetchTests = async() =>{
        let response = await axios.get(`/api/tests/`)
        let tests = response.data
        this.setState({tests})
    }
    render() {
        if (this.state.tests === undefined) {
            return null
        }
        const links = this.state.tests.map((test)=>{
            return (
                <div>
                    <Link to={`/users/${this.props.userId}/tests/${test.id}/graphOfScores`}>
                        {test.name}
                    </Link>
                </div>
            )
        })
        return (
            <div>
                Yolo
                {links}
            </div>
        );
    }
}

export default UserTestScoresLinker;