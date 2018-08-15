import React, { Component } from 'react';
import TestView from './TestView';
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

const ChosenNavLinkGrayed = styled.div`
    background-color: rgba(0,0,0,.2);
`

class TestBuilder extends Component {
    render() {
        if (this.props.tests=== undefined) {
            return null
        }
        const tests = this.props.tests.map((test, i)=>{
            return <TestView key={i} test={test} userId={this.props.userId} snapId={this.props.snapId}/>
        })
        return (
            <div>
                <NavBox>
                    <div>
                        <Link to={`/users/${this.props.userId}`}>
                            <Icon name="home" size="big"/>
                        </Link>
                    </div>

                    <ChosenNavLinkGrayed>
                        <Icon name="camera retro" size="big"/>
                    </ChosenNavLinkGrayed>

                    <div> 
                        <Link to={`/users/${this.props.userId}/testAnalytics`}>
                            <Icon name="line graph" size="big"/>
                        </Link>
                    </div>
                </NavBox>
                {tests}
            </div>
        );
    }
}

export default TestBuilder;