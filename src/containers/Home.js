import React from "react"
import "../CSS/Home.css"
import { Link } from "react-router-dom"
import UScurrent from "../components/UScurrent"
import USaverage from "../components/USaverage"
import UStotal from "../components/UStotal"

const Home = () => {
  return (
    <>
      <Link to="/states">States Index</Link>
      <h1 className="title">United States Overall Status</h1>
      <div className="link">
          <a href="https://www.cdc.gov/ "target="blank">
            Center For Disease Control
          </a>
          <br></br>
          <a href="https://www.who.int/" target="blank">
            World Health Organization
          </a>
        </div>
      <div className="USData">
        <UScurrent />
        <USaverage />
        <UStotal />
      </div>
    </>
  )
}

export default Home
