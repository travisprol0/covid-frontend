import React from "react"
import "../CSS/Home.css"
import UScurrent from "../components/UScurrent"
import USaverage from "../components/USaverage"
import UStotal from "../components/UStotal"

const Home = () => {
  return (
    <>
      <UScurrent />
      <USaverage />
      <UStotal />
    </>
  )
}

export default Home
