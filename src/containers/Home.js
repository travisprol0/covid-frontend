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
      <UScurrent />
      <USaverage />
      <UStotal />
    </>
  )
}

export default Home
