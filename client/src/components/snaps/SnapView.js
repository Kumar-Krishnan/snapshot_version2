import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const SnapBox = styled.div`
    width: 200px;
    height: 200px;
    margin: 0 auto;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 30px;
    border: 7px ridge black;
    border-radius: 200px;
    display: grid;
    background-color: rgba(167, 163, 204, 0.24);
    align-items: center;
`


class SnapView extends Component {

    state = {
        date: "",
        time: ""

    }

    componentDidMount = () =>{
        this.sliceSnapDate()
    }

    sliceSnapDate = async() =>{
        let snapText = this.props.snap.created_at
        let splitText = snapText.split("")
        let date = splitText.slice(0,10).join("")
        let time = splitText.slice(11,16).join("")
        this.setState({date, time})
        this.props.checkSnapTimeAgainstNow(date,time, this.props.snap.id)
    }
    render() {
        if (this.state.date === "" || this.state.time === "") {
            return null
        }
        return (
            <Link to={`/users/${this.props.userId}/snaps/${this.props.snap.id}`}>
                <SnapBox>
                    <h2>{this.state.date}</h2>
                    <h3>{this.state.time}</h3>
                </SnapBox>
            </Link>
        );
    }
}

export default SnapView;