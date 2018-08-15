import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

const NavBox = styled.div`
    text-align: center;
    margin-top: 2px;
    box-shadow: 1px 1px 1px 1px;
`

const Wrapper = styled.div`
    text-align: center;
    border: 1px solid black;
    box-shadow: 1px 1px 1px 1px;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 25px;
`

class UserTestScoresLinker extends Component {
    state = {
        tests: []
    }

    componentDidMount = () =>{
        this.fetchTests()
    }

    fetchTests = async() =>{
        let response = await axios.get(`/api/tests/`)
        let tests = response.data
        this.setState({tests})
    }
    render() {
        if (this.state.tests === undefined) {
            return null
        }
        const links = this.state.tests.map((test)=>{
            return (
                <Wrapper>
                    <Link to={`/users/${this.props.userId}/tests/${test.id}/graphOfScores`}>
                        <h1>{test.name}</h1>
                        <Icon name="line graph" size="massive"/>
                    </Link>
                </Wrapper>
            )
        })
        return (
            <div>
                <NavBox>
                    <Link to={`/users/${this.props.userId}`}>
                        <div>
                            <Icon name="home" size="big"/>
                        </div>
                    </Link>
                </NavBox>
                {links}
            </div>
        );
    }
}

export default UserTestScoresLinker;