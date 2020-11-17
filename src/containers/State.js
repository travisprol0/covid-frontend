import React from "react"
import { Link } from "react-router-dom"
import "../CSS/State.css"
import StateCurrent from "../components/StateCurrent"
import StateAverage from "../components/StateAverage"
import StateTotal from "../components/StateTotal"

class State extends React.Component {
  state = {
    id: null,
    state: null,
    abbreviation: null,
    notes: null,
    website: null,
    twitter: null
  }

  componentDidMount() {
    this.setState({
      id: this.props.location.state.state.state.id,
      state: this.props.location.state.state.state.state,
      abbreviation: this.props.location.state.state.state.abbreviation,
    })
    this.fetchMetadata()
  }

  fetchMetadata() {
    fetch('https://api.covidtracking.com/v1/states/info.json')
    .then((response) => response.json())
    .then((data) => this.filterState(data))
  }

  filterState = (data) => {
    // data.find((state))
    let state = data.find((state) => state.state === this.state.abbreviation)
    let notes = state.notes
    let website = state.covid19Site
    let twitter = "https://twitter.com/" + state.twitter
    this.setState({
      notes: notes,
      website: website,
      twitter: twitter
    })
  }

  render() {
    return (
      <>
        <h1>{this.state.state}</h1>
        <a href={this.state.website} target="blank">{this.state.state}'s COVID-19 Site</a>
        <a href={this.state.twitter} target="blank">{this.state.state}'s Health Department Twitter</a>
        <StateCurrent abbreviation={this.state.abbreviation}/>
        <StateAverage abbreviation={this.state.abbreviation}/>
        <StateTotal abbreviation={this.state.abbreviation}/>
      </>
    )
  }
}

export default State
