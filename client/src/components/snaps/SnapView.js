import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class SnapView extends Component {
    render() {
        return (
            <Link to={`/users/${this.props.userId}/snaps/${this.props.snap.id}`}>
                <div>
                    <h1>{this.props.snap.created_at}</h1>
                </div>
            </Link>
        );
    }
}

export default SnapView;