import React from "react"
import { Link } from 'react-router-dom'
import StateElement from "../components/StateElement"

class StateList extends React.Component {
  state = {
    data: null,
  }
  componentDidMount() {
    fetch("http://localhost:3000/locations")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }))
  }

  mapStates = () => {
    if (this.state.data !== null) {
      return this.state.data.map((state) => (
        <StateElement key={state.id} state={state} />
      ))
    }
  }

  render() {
    return (
      <>
        <Link to="/">Home</Link>
        <ul>{this.mapStates()}</ul>
      </>
    )
  }
}

export default StateList
