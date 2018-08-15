import React, { Component } from 'react';
import axios from 'axios'
import SnapBuilder from '../snaps/SnapBuilder'
import UserMoods from './userMoods/UserMoods';
import UserTestScoresLinker from './UserTestScoresLinker';
import { isDate } from '../../../node_modules/moment';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'


const NavBox = styled.div`
    display: grid;
    grid-template-columns: 30vw 30vw 30vw;
    justify-content: space-around;
    text-align: center;
    margin-top: 2px;
    box-shadow: 1px 1px 1px 1px;
`

class UserHomePage extends Component {

    state = {
        user: {},
        snaps: [],
        date: "",
        time: "",
        snapExistsForThisMinute: false,
        nowSnapId: 0
        // moods: []
    }

    componentDidMount = async() =>{
        this.storeTodayDateAndMin()
        this.fetchUserSnapsAndTests()
        // this.fetchAllMoods()
    }

    fetchUserSnapsAndTests = async() =>{
        let snaps = await axios.get(`/api/users/${this.props.match.params.id}/snaps/`)
        this.setState({snaps : snaps.data.reverse()})
        console.log(snaps.data)
    }

    storeTodayDateAndMin = () =>{
        let now = new Date()
        let nowString = String(now)
        // let splitDateTime = nowString.split("")
        // let date = splitDateTime.slice(0,10).join("")
        // let time = splitDateTime.slice(12,16).join("")
        // this.setState({date, time})
        let nowYear = String(now.getFullYear())
        let nowMonth = now.getMonth() + 1
        if (nowMonth < 10) {
            nowMonth = "0" + nowMonth
        }
        let nowDate = String(now.getUTCDate())
        if (nowDate < 10) {
            nowDate = "0" + nowDate
        }
        let nowHour = String(now.getUTCHours())
        if (nowHour < 10) {
            nowHour = "0" + nowHour
        }
        let nowMinute = String(now.getMinutes())
        if (nowMinute < 10) {
            nowMinute = "0" + nowMinute
        }
        let nowDateState = `${nowYear}-${nowMonth}-${nowDate}`
        let nowTimeState = `${nowHour}:${nowMinute}`
        this.setState({date: nowDateState, time: nowTimeState})
        console.log(nowDateState, nowTimeState)
    }
    // fetchAllMoods = async() =>{
    //     let response = await axios.get(`/api/moods`)
    //     console.log(response.data)
    //     this.setState({moods: response.data})
    //     console.log(this.state.moods)
    // }

    createSnap = async(event) =>{
        event.preventDefault()
        let userId = this.props.match.params.id
        let response = await axios.post(`/api/users/${userId}/snaps`)
        let newSnap = response.data
        console.log(newSnap)

        this.props.history.push(`/users/${userId}/snaps/${newSnap.id}`)
    }

    checkSnapTimeAgainstNow = (date, time, snapId) =>{
        if (date === this.state.date && time === this.state.time){
            this.setState({snapExistsForThisMinute: true})
            this.setState({nowSnapId: snapId})
        }
    }
    render() {
        return (
            <div>
                <NavBox>
                    <div>
                    <Link to={`/users/${this.props.match.params.userId}`}>
                        <Icon name="home" size="big"/>
                    </Link>
                    </div>

                    <div>
                        <Link to={`/users/${this.props.match.params.userId}/snaps/${this.props.match.params.snapId}`}>
                            <Icon name="camera retro" size="big"/>
                        </Link>
                    </div>

                    <div> 
                        <Link to={`/users/${this.props.match.params.id}/testAnalytics`}>
                            <Icon name="line graph" size="big"/>
                        </Link>
                    </div>
                </NavBox>
                {
                    !this.state.snapExistsForThisMinute ?
                        <button onClick ={this.createSnap}>Create New Snap</button>
                    :null
                }
                {
                    this.state.snapExistsForThisMinute ?
                        <Link to={`/users/${this.props.match.params.id}/snaps/${this.state.nowSnapId}`}>
                            <button> Edit Current Snap</button>
                        </Link>
                    :null
                }
                <SnapBuilder checkSnapTimeAgainstNow={this.checkSnapTimeAgainstNow} userId={this.props.match.params.id} snaps={this.state.snaps}/>
                
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