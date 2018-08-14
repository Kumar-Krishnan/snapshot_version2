import React, { Component } from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import WelcomePage from './components/WelcomePage';
import UserHomePage from './components/users/UserHomePage';
import SnapPage from './components/snaps/SnapPage';
import Example from './components/Graph/Example';
import MoodGraph from './components/Graph/MoodGraph';
import TestWithQuestions from './components/tests/TestWithQuestions';
import TestGraphBuilder from './components/graphs/TestGraphBuilder';
import styled from 'styled-components'


const LogoBox = styled.div`
  background-color: #66cc66;
  text-align: center;
  box-shadow: 1px 1px 1px 1px;
`

class App extends Component {
  render() {

    const WelcomePageWrapper = (props) =>(
      <WelcomePage {...props}/>
    )

    const UserHomePageWrapper = (props) =>(
      <UserHomePage {...props}/>
    )

    const SnapPageWrapper = (props) =>(
      <SnapPage {...props}/>
    )

    const moodGrapher = (props) =>(
      <MoodGraph {...props}/>
    )

    const testWithQuestions = (props) =>(
      <TestWithQuestions {...props}/>
    )

    const testScoreGraphs = (props) => (
      <TestGraphBuilder {...props}/>
    )
    return (
      <div className="App">
        <LogoBox>
          <h1 className="logo"> Snap Shots</h1>
        </LogoBox>
        <Router>
          <Switch>
              <Route exact path="/" render={WelcomePageWrapper}/>
              <Route exact path="/users/:id" render={UserHomePageWrapper}/>
              <Route exact path="/users/:userId/snaps/:id" render={SnapPageWrapper}/>
              <Route exact path="/users/:userId/snaps/:snapId/tests/:testId" render={testWithQuestions}/>
              <Route exact path="/users/:userId/tests/:testId/graphOfScores" render={testScoreGraphs}/>
          </Switch>
        </Router>         
      </div>
    );
  }
}

export default App;
