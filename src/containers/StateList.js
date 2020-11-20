import React from "react"
import { Link } from "react-router-dom"
import "../CSS/State.css"
import StateElement from "../components/StateElement"

class StateList extends React.Component {
  state = {
    states: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/locations")
      .then((response) => response.json())
      .then((data) => this.setState({ states: data }))
  }

  mapStates = () => {
    let newSearchTerm = this.state.searchTerm.toUpperCase()
    if (this.state.states !== null && newSearchTerm.length === 0) {
      return this.state.states.map((state) => (
        <StateElement key={state.id} state={state} />
      ))
    } else if (newSearchTerm.length !== 0) {
      console.log(newSearchTerm)
      let filteredStates = this.state.states.filter(
        (state) =>
          state.abbreviation.includes(newSearchTerm) ||
          state.state.toUpperCase().includes(newSearchTerm)
      )
      return filteredStates.map((state) => (
        <StateElement key={state.id} state={state} />
      ))
    }
  }

  changeHandler = (e) => {
    this.setState({ searchTerm: e.target.value })
    this.mapStates()
  }

  resetSearch = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <>
        <Link to="/">Home</Link>
        <form onSubmit={this.submitHandler}>
          <label for="search">Search:</label>
          <input
            type="search"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.changeHandler}
            placeholder="state or abbreviation"
          ></input>
          <button onClick={this.resetSearch}>reset</button>
        </form>
        <div>
          <ul className="stateList">{this.mapStates()}</ul>
        </div>
      </>
    )
  }
}

export default StateList
