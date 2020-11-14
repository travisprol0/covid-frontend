import React from "react"
import UScurrent from '../components/UScurrent'
import USaverage from '../components/USaverage'
import UStotal from '../components/UStotal'

class Home extends React.Component {
  render() {
    return (
        <>
        <UScurrent />
        <USaverage />
        <UStotal />
        </>
    )
  }
}

export default Home
