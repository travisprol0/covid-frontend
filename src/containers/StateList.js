import React from "react"
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
      return this.state.data.map((state) => <StateElement key={state.id} state={state}/>)
    }
  }

  render() {
    return <>
    <ul>
    {this.mapStates()}
    </ul>
    </>
  }
}

export default StateList
