import React, { Component } from 'react';

class TestView extends Component {

    componentDidMount = () =>{
        // this.fetchTestName()
    }

    // fetchTestName = async() =>{

    // }
    render() {
        return (
            <div>
              {this.props.test.name}  
            </div>
        );
    }
}

export default TestView;