import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class TestView extends Component {

    componentDidMount = () =>{
        // this.fetchTestName()
    }

    // fetchTestName = async() =>{

    // }
    render() {
        return (
            <Link to={`/snaps/${this.props.snapId}/tests/${this.props.test.id}`}>
                <div>
                {this.props.test.name}  
                </div>
            </Link>
        );
    }
}

export default TestView;