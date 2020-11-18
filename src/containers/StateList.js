import React from "react"
import { Link } from "react-router-dom"
import "../CSS/State.css"
import StateElement from "../components/StateElement"

class StateList extends React.Component {
  state = {
    states: [],
    searchTerm: "",
    filteredStates: [],
  }
  componentDidMount() {
    fetch("http://localhost:3000/locations")
      .then((response) => response.json())
      .then((data) => this.setState({ states: data }))
  }

  filterStates = (searchTerm) => {
    if (this.state.data !== null) {
      let newSearchTerm = searchTerm.toUpperCase()
      let filteredStates = this.state.states.filter(
        (state) =>
          state.abbreviation.includes(newSearchTerm) ||
          state.state.toUpperCase().includes(newSearchTerm)
      )
      this.setState({ filteredStates: filteredStates })
    }
  }

  mapStates = () => {
    if (this.state.states !== null && this.state.filteredStates.length === 0) {
      return this.state.states.map((state) => (
        <StateElement key={state.id} state={state} />
      ))
    } else if (this.state.filteredStates.length !== 0) {
      return this.state.filteredStates.map((state) => (
        <StateElement key={state.id} state={state} />
      ))
    }
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.filterStates(this.state.searchTerm)
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  resetSearch = () => {
    this.setState({ filteredStates: [], searchTerm: "" })
  }

  render() {
    return (
      <>
        <Link to="/">Home</Link>
        <form onSubmit={this.submitHandler}>
          <label for="search">Search:</label>
          <input
            id="search"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.changeHandler}
            placeholder="state or abbreviation"
          ></input>
          <button>search</button>
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
