import React, { Component } from 'react';
import axios from 'axios'
import { Button, Checkbox, Form } from 'semantic-ui-react'


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
        event.preventDefault()
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
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmitLogin}>
                    <Form.Field>
                        <label>User Name</label>
                        <input onChange={this.handleLoginFieldChange} placeholder='User Name' />
                    </Form.Field>
                    
                    <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
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
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default WelcomePage;