import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

const ButtonsHolder = styled.div`
    display: grid;
    grid-template-columns: 40vw 40vw;
    justify-content: space-around;
    margin-top: 20px;
    margin-bottom: 20px;
    .button{
        margin-bottom: 5px;
    }
`

const Title = styled.h2`
    text-align: center;
`

class TestGraphView extends Component {
    state = {
        xRange: -7,
        yRange: 0
    }

    componentDidMount = () =>{
        this.setYRangeAsTestMax
    }

    setYRangeAsTestMax = async() =>{
        let yRange = await this.props.max
        this.setState({yRange})
    }   

    setXRangeAsSeven = (event) =>{
        
        if (event !== undefined){
            event.preventDefault()
        } 
        this.setState({xRange: -7})
    }

    setXRangeAsThirty = (event) =>{
        if (event !== undefined){
            event.preventDefault()
        }
        this.setState({xRange: -30})
    }

    setXRangeAsOneEighty = (event) =>{
        if (event !== undefined){
            event.preventDefault()
        }
        this.setState({xRange: -180})
    }
    resetRanges = (event) =>{
        event.preventDefault()
        this.setXRangeAsSeven()
        this.setYRangeAsTestMax()
    }
    render() {
        return (

            <div>
                <ButtonsHolder>
                    <div>
                        <Button color="green" fluid onClick={this.setXRangeAsSeven}>
                            Scores 7 mins.
                        </Button>
                    </div>

                    <div>
                        <Button color="olive" fluid onClick={this.setXRangeAsThirty}>
                            Scores 30 mins.
                        </Button>
                    </div>

                    <div>
                        <Button color="yellow" fluid onClick={this.setXRangeAsOneEighty}>
                            Scores 180 mins.
                        </Button>
                    </div>

                    <div>
                        <Button color="teal" fluid onClick={this.resetRanges}>
                            Reset Graph.
                        </Button>
                    </div>

                </ButtonsHolder>

                <Title>
                    {this.props.test.name}
                </Title>
                <Plot
                data={[
                {type: 'bar', x: this.props.x, y: this.props.y},
                ]}
                layout={ {
                    width: 400,
                    height: 500,
                    xaxis: {
                        title: 'Mins',
                        range: [0, this.state.xRange]
                    },
                    yaxis: {
                        title: 'Test score',
                        range: [0,this.props.max]
                        }
                    } 
                }
                />
            </div>
        );
    }
}

export default TestGraphView;