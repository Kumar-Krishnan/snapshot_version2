import React, { Component } from 'react';
import axios from 'axios'
import SnapBuilder from '../snaps/SnapBuilder'
import UserMoods from './userMoods/UserMoods';
import UserTestScoresLinker from './UserTestScoresLinker';
import { isDate } from '../../../node_modules/moment';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'



const NavBox = styled.div`
    display: grid;
    grid-template-columns: 30vw 30vw 30vw;
    justify-content: space-around;
    text-align: center;
    margin-top: 2px;
    box-shadow: 1px 1px 1px 1px;
`

const ButtonContainer = styled.div`
    text-align: center;
    margin-top: 20px;
`
const ChosenNavLinkGrayed = styled.div`
    background-color: rgba(0,0,0,.2);
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
                    <ChosenNavLinkGrayed>
                        <Icon name="home" size="big"/>
                    </ChosenNavLinkGrayed>

                    <div>
                        {
                            this.state.snapExistsForThisMinute ?
                            <Link to={`/users/${this.props.match.params.id}/snaps/${this.state.nowSnapId}`}>
                                <Icon name="camera retro" size="big"/>
                            </Link>
                            :
                            <Icon color="blue" onClick={this.createSnap} name="camera retro" size="big"/>
                        }
                    </div>

                    <div> 
                        <Link to={`/users/${this.props.match.params.id}/testAnalytics`}>
                            <Icon name="line graph" size="big"/>
                        </Link>
                    </div>
                </NavBox>
                {
                    !this.state.snapExistsForThisMinute ?
                        <ButtonContainer>
                            <Button  color="olive" onClick ={this.createSnap}>Create New Snap</Button>
                        </ButtonContainer>   
                    :null
                }
                {
                    this.state.snapExistsForThisMinute ?
                        <ButtonContainer>
                            <Link to={`/users/${this.props.match.params.id}/snaps/${this.state.nowSnapId}`}>
                                <Button  color="blue"> Edit Current Snap</Button>
                            </Link>
                        </ButtonContainer>
                        
                    :null
                }
                <SnapBuilder checkSnapTimeAgainstNow={this.checkSnapTimeAgainstNow} userId={this.props.match.params.id} snaps={this.state.snaps}/>
            </div>
        );
    }
}

export default UserHomePage;