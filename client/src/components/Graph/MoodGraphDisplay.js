import React, { Component } from 'react';
import Plot from 'react-plotly.js';


class MoodGraphDisplay extends Component {
    render() {
        const x = 3
        return (
            <div>
                <Plot
                data={[
                {type: 'bar', x: this.props.x, y: this.props.y},
                ]}
                layout={ {
                    width: 700,
                    height: 500,
                    xaxis: {
                        title: 'Hours'
                    },
                    yaxis: {
                        title: 'Mood score'
                    },
                    title: `${this.props.mood.name} scores over time`} }
                />
            </div>
        );
    }
}

export default MoodGraphDisplay;