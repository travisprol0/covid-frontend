import React from "react"

class USaverage extends React.Component {
  state = { 
      newCases: null,
      newNegatives: null,
      currentlyHospitalized: null,
      hospitalizationIncrease: null,
      dead: null
   }

  componentDidMount() {
    fetch("https://api.covidtracking.com/v1/us/daily.json")
      .then((response) => response.json())
      .then((data) => this.positiveAverage(data))
        
  }

  positiveAverage = (data) => {
    let sevenDays = data.slice(0, 7)
    let positives = sevenDays.map((days) => days.positive)
    let sum = positives.reduce((a, b) => a + b)
    let positiveAveragePreDecimal = sum / 7
    let positiveAveragePreComma = Math.round(positiveAveragePreDecimal)
    let finalAverage = positiveAveragePreComma.toLocaleString('en')
    this.setState({newCases: finalAverage})
    this.negativeAverage(data)
  }

  negativeAverage = (data) => {
    let sevenDays = data.slice(0, 7)
    let negatives = sevenDays.map((days) => days.negative)
    let sum = negatives.reduce((a, b) => a + b)
    let negativeAveragePreDecimal = sum / 7
    let negativeAveragePreComma = Math.round(negativeAveragePreDecimal)
    let finalAverage = negativeAveragePreComma.toLocaleString('en')
    this.setState({newNegatives: finalAverage})
    this.percentPositiveAverage(data)
  }

  percentPositiveAverage = (data) => {
      // numbers are strings right now that's why this doesn't work
      let percent = (this.state.newCases / this.state.newNegatives) * 100
      console.log(data)
  }

  render() {
    return (
      <div className="USaverageData">
        <h5>7 Day Average</h5>
        <p>New Positives: {this.state.newCases}</p>
        <p>New Negatives: {this.state.newNegatives}</p>
        <p>Percent Positive: </p>
        <p>Currently Hospitalized: </p>
        <p>Hospitalization Increase: </p>
        <p>Currently in ICU: </p>
        <p>Currently on Ventilator: </p>
        <p>Lives Lost: </p>
      </div>
    )
  }
}

export default USaverage
