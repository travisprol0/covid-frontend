import React from "react"

class StateTotal extends React.Component {
  state = {
    cases: null,
    negatives: null,
    percentPositive: null,
    hospitalized: null,
    icu: null,
    ventilator: null,
    dead: null,
  }

  componentDidMount() {
    fetch("https://api.covidtracking.com/v1/states/current.json")
      .then((response) => response.json())
      .then((data) => this.filterState(data))
  }

  filterState = (data) => {
    let state = data.find((state) => state.state === this.props.abbreviation)
    this.cases(state)
  }

  cases = (data) => {
    let cases = data.positive.toLocaleString("en")
    this.setState({ cases: cases })
    this.negatives(data)
  }

  negatives = (data) => {
    let negatives = data.negative.toLocaleString("en")
    this.setState({ negatives: negatives })
    this.percentPositive(data)
  }

  percentPositive = (data) => {
    let percent = ((data.positive / data.negative) * 100).toFixed(2)
    this.setState({ percentPositive: percent })
    this.hospitalized(data)
  }

  hospitalized = (data) => {
    if (data.hospitalizedCumulative === null) {
      let total = "Data Not Tracked"
      this.setState({ hospitalized: total })
      this.icu(data)
    } else {
      let hospitalized = data.hospitalizedCumulative.toLocaleString("en")
      this.setState({ hospitalized: hospitalized })
      this.icu(data)
    }
  }

  icu = (data) => {
    if (data.inIcuCumulative === null) {
      let total = "Data Not Tracked"
      this.setState({ icu: total })
      this.ventilator(data)
    } else {
      let icu = data.inIcuCumulative.toLocaleString("en")
      this.setState({ icu: icu })
      this.ventilator(data)
    }
  }

  ventilator = (data) => {
    if (data.onVentilatorCumulative === null) {
      let total = "Data Not Tracked"
      this.setState({ ventilator: total })
      this.deaths(data)
    } else {
      let ventilator = data.onVentilatorCumulative.toLocaleString("en")
      this.setState({ ventilator: ventilator })
      this.deaths(data)
    }
  }

  deaths = (data) => {
    let deaths = data.death.toLocaleString("en")
    this.setState({ dead: deaths })
  }

  render() {
    return (
      <div className="stateTotalData">
        <h5>Totals Since 01/22/2020</h5>
        <p>Positives: {this.state.cases}</p>
        <p>Negatives: {this.state.negatives}</p>
        <p>Percent Positive: {this.state.percentPositive}%</p>
        <p>Hospitalized: {this.state.hospitalized}</p>
        <p>ICU Patients: {this.state.icu}</p>
        <p>Patients on Ventilator: {this.state.ventilator}</p>
        <p>Lives Lost: {this.state.dead}</p>
      </div>
    )
  }
}

export default StateTotal
