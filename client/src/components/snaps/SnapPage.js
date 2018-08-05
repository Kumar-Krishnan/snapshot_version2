import React, { Component } from 'react';
import axios from 'axios'
import MoodBuilder from '../moods/MoodBuilder';
// a
class SnapPage extends Component {

    state ={
        moods: []
    }

    componentDidMount = () =>{
        this.fetchAllMoods()
    }

    fetchAllMoods = async() =>{
        let response = await axios.get(`/api/moods`)
        console.log(response.data)
        this.setState({moods: response.data})
        console.log(this.state.moods)
    }
    render() {
        return (
            <div>
                <MoodBuilder moods={this.state.moods} snapId={this.props.match.params.id}/>
            </div>
        );
    }
}

export default SnapPage;