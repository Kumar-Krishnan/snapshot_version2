import React, { Component } from 'react';
import axios from 'axios'
import SnapBuilder from '../snaps/SnapBuilder'
import {
    Charts,
    ChartContainer,
    ChartRow,
    YAxis,
    LineChart
} from "react-timeseries-charts";
import UserMoods from './userMoods/UserMoods';

class UserHomePage extends Component {

    state = {
        user: {},
        snaps: [],
        moods: []
    }

    componentDidMount = () =>{
        this.fetchUserSnapsAndTests()
        this.fetchAllMoods()
    }

    fetchUserSnapsAndTests = async() =>{
        let snaps = await axios.get(`/api/users/${this.props.match.params.id}/snaps/`)
        this.setState({snaps : snaps.data})
        console.log(snaps.data)
    }

    fetchAllMoods = async() =>{
        let response = await axios.get(`/api/moods`)
        console.log(response.data)
        this.setState({moods: response.data})
        console.log(this.state.moods)
    }

    createSnap = async(event) =>{
        event.preventDefault()
        let userId = this.props.match.params.id
        let response = await axios.post(`/api/users/${userId}/snaps`)
        let newSnap = response.data
        console.log(newSnap)

        this.props.history.push(`/users/${userId}/snaps/${newSnap.id}`)
    }
    render() {
        return (
            <div>
                <button onClick ={this.createSnap}>Create New Snap</button>
                <SnapBuilder userId={this.props.match.params.id} snaps={this.state.snaps}/>
                <UserMoods moods={this.state.moods} userId={this.props.match.params.id}/>
                {/* <ChartContainer timeRange={[series1.timerange()]} width={800}>
                    <ChartRow height="200">
                        <YAxis id="axis1" label="AUD" min={0.5} max={1.5} width="60" type="linear" format="$,.2f"/>
                        <Charts>
                            <LineChart axis="axis1" series={series1} column={["aud"]}/>
                            <LineChart axis="axis2" series={series2} column={["euro"]}/>
                        </Charts>
                        <YAxis id="axis2" label="Euro" min={0.5} max={1.5} width="80" type="linear" format="$,.2f"/>
                    </ChartRow>
                </ChartContainer> */}
            </div>
        );
    }
}

export default UserHomePage;