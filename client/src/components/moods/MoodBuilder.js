import React, { Component } from 'react';
import MoodView from './MoodView';

class MoodBuilder extends Component {
    render() {
        if (this.props.moods=== undefined) {
            return null
        }
        const moods = this.props.moods.map((mood, i)=>{
            return <MoodView key={i} mood={mood} snapId={this.props.snapId}/>
        })
        return (
            <div>
                {moods}
            </div>
        );
    }
}

export default MoodBuilder;