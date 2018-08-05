import React, { Component } from 'react';
import SnapView from './SnapView';
import {Link} from 'react-router-dom'


class Snap extends Component {
    render() {
        if (this.props.snaps === undefined) {
            return null
        }
        const snaps = this.props.snaps.map((snap, i)=>{
            return <SnapView key={i} snap={snap} userId={this.props.userId}/>
        })
        return (
            <div>
               {/* {
                    this.props.snaps.map((snap, i) => {
                        return (
                            <Link to={`users/${this.props.userId}/snaps/${snap.id}`}>
                                <div key={`${snap.created_at}_{snap.id`}>
                                    <h1>{snap.created_at}</h1> 
                                </div>
                            </Link>

                        )
                    })             
                } */}
                {snaps}
            </div>
        );
    }
}

export default Snap;