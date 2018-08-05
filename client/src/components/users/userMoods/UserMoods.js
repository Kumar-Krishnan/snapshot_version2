import React, { Component } from 'react';
import UserMoodView from './UserMoodView';

class UserMoods extends Component {
    render() {
        if (this.props.moods=== undefined) {
            return null
        }
        const moods = this.props.moods.map((mood, i)=>{
            return <UserMoodView key={i} mood={mood} userId={this.props.userId}/>
        })
        return (
            <div>
                {moods}
            </div>
        );
    }
}

export default UserMoods;