import React from "react"
import '../CSS/Home.css';
import UScurrent from '../components/UScurrent'
import USaverage from '../components/USaverage'
import UStotal from '../components/UStotal'

class Home extends React.Component {

    state = {
        current: []
    }

    componentDidMount() {
        fetch('https://api.covidtracking.com/v1/us/current.json')
        .then(res => res.json())
        .then(data => this.setState({current: data[0]}))
    }

    renderUScurrent = () => {
        if (this.state.current !== []) {
             return <UScurrent data={this.state.current}/>
        } else {
             return null
        }
    }

    renderUStotal = () => {
        if (this.state.current !== []) {
             return <UStotal data={this.state.current}/>
        } else {
             return null
        }
    }
    

  render() {
    return (
        <>
        {this.renderUScurrent()}
        <USaverage />
        {this.renderUStotal()}
        </>
    )
  }
}

export default Home
