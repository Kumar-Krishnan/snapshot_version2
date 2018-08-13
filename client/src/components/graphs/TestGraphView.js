import React, { Component } from 'react';
import Plot from 'react-plotly.js';


class TestGraphView extends Component {
    render() {
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
                        title: 'Test score'
                    },
                    title: `${this.props.test.name} scores over time`} }
                />
            </div>
        );
    }
}

export default TestGraphView;