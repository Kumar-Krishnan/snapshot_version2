import React, { Component } from 'react';
import axios from 'axios'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-left: 20px;
    margin-right: 25px;
    text-align: center;
    
    .form{
        border: 3px solid teal;
        border-radius: 20px;
        margin-top: 15px;
        label{
            font-size: 30px;
        }
    }
    
`

const ButtonHolder = styled.div`
    text-align: center;
    padding-bottom: 10px;
`
const TestUserButtonHolder = styled(ButtonHolder)`
    &&&{
        margin-top: 30px;
    }

`
class WelcomePage extends Component {

    state ={
        userName: '',
        newUserAccountName: '',
        users: []
    }

    componentDidMount = () =>{
        this.fetchUsers()
    }

    fetchUsers = async() =>{
       let response = await axios.get('/api/users')
       this.setState({users: response.data})
    }
    handleLoginFieldChange = (event) =>{
        const userInput = event.target.value
        const newUserName = userInput
        this.setState({userName: newUserName})
        console.log(this.state.userName)
    }

    handleNewUserFieldChange = (event) =>{
        const userInput = event.target.value
        const newUserAccountName = userInput
        this.setState({newUserAccountName})
        console.log(this.state.newUserAccountName)
    }

    handleSubmitLogin = (event) =>{
        if (event !== undefined){
            event.preventDefault()
        }
        const targetUser = this.state.users.find((user)=>{
            return user.name === this.state.userName
        })
        if (targetUser !== undefined){
            this.props.history.push(`/users/${targetUser.id}`)
        }
        else{
            alert("Please submit a valid user name")
        }
    }

    handleSubmitNewUser = async (event) =>{
        event.preventDefault()
        let newUserAccount = {
            name: this.state.newUserAccountName
        }
        let response = await axios.post(`/api/users`, newUserAccount)
        let newAccount = response.data
        this.props.history.push(`/users/${newAccount.id}`)
    }

    testUserLogin = async() =>{
        await this.setState({userName: "Fyodor Dostoevsky"})
        this.handleSubmitLogin()
    }
    render() {
        return (
            <Wrapper>
                <Form onSubmit={this.handleSubmitLogin}>
                    <Form.Field>
                        <label>User Name</label>
                        <input onChange={this.handleLoginFieldChange} placeholder='User Name' />
                    </Form.Field>
                    
                    <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' />
                    </Form.Field>
                    <ButtonHolder>
                        <Button color="blue" type='submit'>Submit</Button>
                    </ButtonHolder>
                </Form>

                <Form onSubmit={this.handleSubmitNewUser}>
                    <Form.Field>
                        <label>New User Name</label>
                        <input onChange={this.handleNewUserFieldChange} placeholder='New Account' />
                    </Form.Field>
                    
                    <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' />
                    </Form.Field>
                    <ButtonHolder>
                        <Button color="blue" type='submit'>Submit</Button>
                    </ButtonHolder>
                </Form>
                <TestUserButtonHolder>
                    <Button onClick={this.testUserLogin} fluid color="blue">
                        Login With Test User
                    </Button>
                </TestUserButtonHolder>
            </Wrapper>
        );
    }
}

export default WelcomePage;