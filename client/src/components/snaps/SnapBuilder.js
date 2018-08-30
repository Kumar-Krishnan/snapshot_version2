import React, { Component } from 'react';
import SnapView from './SnapView';
import {Link} from 'react-router-dom'


class Snap extends Component {
    render() {
        if (this.props.snaps === undefined) {
            return null
        }
        const snaps = this.props.snaps.map((snap, i)=>{
            return <SnapView key={i} checkSnapTimeAgainstNow={this.props.checkSnapTimeAgainstNow} snap={snap} userId={this.props.userId}/>
        })
        return (
            <div>
                {snaps}
            </div>
        );
    }
}

export default Snap;