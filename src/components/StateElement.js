import React from "react"
import { Link } from "react-router-dom"

const StateElement = (props) => {
  return (
    <Link to={"/states/" + props.state.id}>
    <li>{props.state.state}</li>
    </Link>

  )
}

export default StateElement
