import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class UserMoodView extends Component {
    render() {
        return (
            <Link to={`/users/${this.props.userId}/moods/${this.props.mood.id}`}>
                <div>
                <h2>{this.props.mood.name} Timeline</h2>
                </div>
            </Link>
        );
    }
}

export default UserMoodView;