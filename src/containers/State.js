import React from "react"
import "../CSS/State.css"

class State extends React.Component {
  state = {
    id: null,
    state: null,
    abbreviation: null,
  }
  componentDidMount() {
    this.setState({
      id: this.props.location.state.state.state.id,
      state: this.props.location.state.state.state.state,
      abbreviation: this.props.location.state.state.state.abbreviation,
    })
  }

  render() {
    return <h1>{this.state.state}</h1>
  }
}

export default State
