import React, { Component } from 'react';
import UserTestScoresLinker from '../users/UserTestScoresLinker';

class TestAnalyticsLinker extends Component {
    render() {
        return (
            <div>
                <UserTestScoresLinker userId={this.props.match.params.id}/>
            </div>
        );
    }
}

export default TestAnalyticsLinker;