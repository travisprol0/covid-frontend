import React from "react"
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
    

  render() {
    return (
        <>
        <UScurrent data={this.state.current}/>
        <USaverage />
        <UStotal />
        </>
    )
  }
}

export default Home
