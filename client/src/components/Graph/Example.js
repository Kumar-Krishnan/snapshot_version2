import React, { Component } from 'react';
import Plot from 'react-plotly.js';


class Example extends Component {
    render() {
        return (
            <Plot
                data={[
                {
                    x: [1, 2, 3,5],
                    y: [2, 6, 3,7],
                    type: 'scatter',
                    mode: 'lines+points',
                    marker: {color: 'red'},
                },
                {type: 'bar', x: [1, 2, 3,5], y: [2, 5, 3,7]},
                ]}
                layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
            />
        );
    }
}

export default Example;