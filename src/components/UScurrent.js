import React from "react"

class UScurrent extends React.Component {
  state = {
    date: null,
    cases: null,
    negatives: null,
    percentPositive: null,
    currentlyHospitalized: null,
    hospitalizationIncrease: null,
    icu: null,
    ventilator: null,
    dead: null,
  }

  componentDidMount() {
    fetch("https://api.covidtracking.com/v1/us/current.json")
      .then((response) => response.json())
      .then((data) => this.formatDate(data[0]))
  }

  formatDate = (data) => {
    let date = data.date.toString()
    let dateArray = []
    let month = date.slice(4, 6)
    let day = date.slice(6, 8)
    let year = date.slice(0, 4)
    dateArray.push(month, day, year)
    let formattedDate = dateArray.join("/")
    this.setState({date: formattedDate})
    this.cases(data)
  }

  cases = (data) => {
    let cases = data.positiveIncrease.toLocaleString("en")
    this.setState({cases: cases})
    this.negatives(data)
}

negatives = (data) => {
  let negatives = data.negativeIncrease.toLocaleString("en")
  this.setState({negatives: negatives})
  this.percentPositive(data)
}

percentPositive = (data) => {
  let percent = ((data.positiveIncrease / data.negativeIncrease) * 100).toFixed(2)
  this.setState({ percentPositive: percent })
  this.hospitalized(data)
}

hospitalized = (data) => {
    let hospitalized = data.hospitalizedCumulative.toLocaleString("en")
    this.setState({hospitalized: hospitalized})
    this.icu(data)
}

icu = (data) => {
    let icu = data.inIcuCumulative.toLocaleString("en")
    this.setState({icu: icu})
    this.ventilator(data)
}

ventilator = (data) => {
    let ventilator = data.onVentilatorCumulative.toLocaleString("en")
    this.setState({ventilator: ventilator})
    this.deaths(data)
}

deaths = (data) => {
    let deaths = data.death.toLocaleString("en")
    this.setState({dead: deaths})
}

  render() {
    return (
      <div className="UScurrentData">
        <h5>Today: {this.state.date}</h5>
        <p>New Positives: {this.state.cases}</p>
        <p>New Negatives: {this.state.negatives}</p>
        <p>Percent Positive: {this.state.percentPositive}%</p>
        <p>Currently Hospitalized: {this.state.currentlyHospitalized}</p>
        <p>Hospitalization Increase: {this.state.hospitalizationIncrease}</p>
        <p>Currently in ICU: {this.state.icu}</p>
        <p>Currently on Ventilator: {this.state.ventilator}</p>
        <p>Lives Lost: {this.state.dead}</p>

        {/* <p>New Positives: {props.data.positiveIncrease.toLocaleString("en")}</p>
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
}

export default UScurrent
