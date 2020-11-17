import React from 'react'


class StateAverage extends React.Component {
    state = {
        newCases: null,
        newNegatives: null,
        percentPositive: null,
        currentlyHospitalized: null,
        hospitalizationIncrease: null,
        icu: null,
        ventilator: null,
        dead: null,
      }

      componentDidMount() {
          fetch("https://api.covidtracking.com/v1/states/daily.json")
          .then((response) => response.json())
          .then((data) => this.filterState(data))
      }

      filterState = (data) => {
        let state = data.filter((state) => state.state === this.props.abbreviation)
        let sevenDays = state.slice(0,7)
        this.positiveAverage(sevenDays)
      }

      positiveAverage = (data) => {
        let positives = data.map((days) => days.positiveIncrease)
        let sum = positives.reduce((a, b) => a + b)
        let positiveAveragePreDecimal = sum / 7
        let positiveAveragePreComma = Math.round(positiveAveragePreDecimal)
        let finalAverage = positiveAveragePreComma.toLocaleString("en")
        this.setState({ newCases: finalAverage })
        this.negativeAverage(data, positiveAveragePreComma)
      }

      negativeAverage = (data, positive) => {
        let sevenDays = data.slice(0, 7)
        let negatives = sevenDays.map((days) => days.negativeIncrease)
        let sum = negatives.reduce((a, b) => a + b)
        let negativeAveragePreDecimal = sum / 7
        let negativeAveragePreComma = Math.round(negativeAveragePreDecimal)
        let finalAverage = negativeAveragePreComma.toLocaleString("en")
        this.setState({ newNegatives: finalAverage })
        this.percentPositiveAverage(data, positive, negativeAveragePreComma)
      }

      percentPositiveAverage = (data, positive, negative) => {
        let percent = ((positive / negative) * 100).toFixed(2)
        this.setState({ percentPositive: percent })
        this.currentlyHospitalizedAverage(data)
      }

      currentlyHospitalizedAverage = (data) => {
        let hospitalized = data.map((days) => days.hospitalizedCurrently)
        let averagePreDecimal = hospitalized.reduce((a, b) => a + b) / 7
        let averagePreComma = Math.round(averagePreDecimal)
        let average = averagePreComma.toLocaleString("en")
        this.setState({ currentlyHospitalized: average })
        this.hospitalizationIncreaseAverage(data)
      }

      hospitalizationIncreaseAverage = (data) => {
        let hospitalizationIncrease = data.map((days) => days.hospitalizedIncrease)
        let averagePreDecimal = hospitalizationIncrease.reduce((a, b) => a + b) / 7
        let averagePreComma = Math.round(averagePreDecimal)
        let average = averagePreComma.toLocaleString("en")
        this.setState({ hospitalizationIncrease: average })
        this.icuIncreaseAverage(data)
      }

      icuIncreaseAverage = (data) => {
        let icuIncrease = data.map((days) => days.inIcuCurrently)
        let averagePreDecimal = icuIncrease.reduce((a, b) => a + b) / 7
        let averagePreComma = Math.round(averagePreDecimal)
        let average = averagePreComma.toLocaleString("en")
        this.setState({ icu: average })
        this.ventilatorIncreaseAverage(data)
      }

      ventilatorIncreaseAverage = (data) => {
        let ventilatorIncrease = data.map((days) => days.onVentilatorCurrently)
        let averagePreDecimal = ventilatorIncrease.reduce((a, b) => a + b) / 7
        let averagePreComma = Math.round(averagePreDecimal)
        let average = averagePreComma.toLocaleString("en")
        this.setState({ ventilator: average })
        this.deathsAverage(data)
      }

      deathsAverage = (data) => {
        let deaths = data.map((days) => days.deathIncrease)
        let averagePreDecimal = deaths.reduce((a, b) => a + b) / 7
        let averagePreComma = Math.round(averagePreDecimal)
        let average = averagePreComma.toLocaleString("en")
        this.setState({ dead: average })
      }

    render() {
        return (
            <div className="stateAverageData">
            <h5>7 Day Average</h5>
            <p>New Positives: {this.state.newCases}</p>
            <p>New Negatives: {this.state.newNegatives}</p>
            <p>Percent Positive: {this.state.percentPositive}%</p>
            <p>Currently Hospitalized: {this.state.currentlyHospitalized}</p>
            <p>Hospitalization Increase: {this.state.hospitalizationIncrease}</p>
            <p>Currently in ICU: {this.state.icu}</p>
            <p>Currently on Ventilator: {this.state.ventilator}</p>
            <p>Lives Lost: {this.state.dead}</p>
          </div>
        )
    }
}


export default StateAverage