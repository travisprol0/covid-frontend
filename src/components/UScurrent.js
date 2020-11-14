import React from "react"

const UScurrent = (props) => {
  const formatDate = () => {
    let date = props.data.date
    // let dateString = date.toString()
    // let dateArray = []
    // let month = dateString.slice(4, 6)
    // let day = dateString.slice(6, 8)
    // let year = dateString.slice(0, 4)
    // dateArray.push(month, day, year)
    // let formattedDate = dateArray.join("/")
    // return formattedDate
  }

  let percentagePositive = (props.data.positiveIncrease / props.data.negativeIncrease) * 100
  percentagePositive = percentagePositive.toFixed(2)

  return (
    <div className="UScurrentData">
      {/* <h5>Today: {formatDate()}</h5>
      <p>New Positives: {props.data.positiveIncrease.toLocaleString("en")}</p>
      <p>New Negatives: {props.data.negativeIncrease.toLocaleString("en")}</p>
      <p>Percent Positive: {percentagePositive}%</p>
      <p>Currently Hospitalized: {props.data.hospitalizedCurrently.toLocaleString("en")}</p>
      <p>Hospitalization Increase: {props.data.hospitalizedIncrease.toLocaleString("en")}</p>
      <p>Currently in ICU: {props.data.inIcuCurrently.toLocaleString("en")}</p>
      <p>Currently on Ventilator: {props.data.onVentilatorCurrently.toLocaleString("en")}</p>
      <p>Lives Lost: {props.data.deathIncrease.toLocaleString("en")}</p> */}
    </div>
  )
}

export default UScurrent
