import React, { Component } from 'react';
import TestView from './TestView';

class TestBuilder extends Component {
    render() {
        if (this.props.tests=== undefined) {
            return null
        }
        const tests = this.props.tests.map((test, i)=>{
            return <TestView key={i} test={test} snapId={this.props.snapId}/>
        })
        return (
            <div>
                {tests}
            </div>
        );
    }
}

export default TestBuilder;