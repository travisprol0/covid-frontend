import React from "react"

class StateCurrent extends React.Component {
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
    fetch("https://api.covidtracking.com/v1/states/current.json")
      .then((response) => response.json())
      .then((data) => this.filterState(data))
  }

  filterState = (data) => {
    let state = data.find((state) => state.state === this.props.abbreviation)
    this.formatDate(state)
  }

  formatDate = (state) => {
    let date = state.date.toString()
    let dateArray = []
    let month = date.slice(4, 6)
    let day = date.slice(6, 8)
    let year = date.slice(0, 4)
    dateArray.push(month, day, year)
    let formattedDate = dateArray.join("/")
    this.setState({ date: formattedDate })
    this.cases(state)
  }

  cases = (data) => {
    let cases = data.positiveIncrease.toLocaleString("en")
    this.setState({ cases: cases })
    this.negatives(data)
  }

  negatives = (data) => {
    let negatives = data.negativeIncrease.toLocaleString("en")
    this.setState({ negatives: negatives })
    this.percentPositive(data)
  }

  percentPositive = (data) => {
    let percent = (
      (data.positiveIncrease / data.negativeIncrease) *
      100
    ).toFixed(2)
    this.setState({ percentPositive: percent })
    this.currentlyHospitalized(data)
  }

  currentlyHospitalized = (data) => {
    let hospitalized = data.hospitalizedCurrently.toLocaleString("en")
    this.setState({ currentlyHospitalized: hospitalized })
    this.hospitalizationIncrease(data)
  }

  hospitalizationIncrease = (data) => {
    let hospitalizationIncrease = data.hospitalizedIncrease.toLocaleString("en")
    this.setState({ hospitalizationIncrease: hospitalizationIncrease })
    this.icu(data)
  }

  icu = (data) => {
    if (data.inIcuCurrently == null) {
      let icu = 0
      this.setState({ icu: icu })
      this.ventilator(data)
    } else {
      let icu = data.inIcuCurrently.toLocaleString("en")
      this.setState({ icu: icu })
      this.ventilator(data)
    }
  }

  ventilator = (data) => {
    if (data.onVentilatorCurrently == null) {
      let ventilator = 0
      this.setState({ ventilator: ventilator })
      this.deaths(data)
    } else {
      let ventilator = data.onVentilatorCurrently.toLocaleString("en")
      this.setState({ ventilator: ventilator })
      this.deaths(data)
    }
  }

  deaths = (data) => {
    let deaths = data.deathIncrease.toLocaleString("en")
    this.setState({ dead: deaths })
  }

  render() {
    return (
      <div className="stateCurrentData">
        <h5>Today: {this.state.date}</h5>
        <p>New Positives: {this.state.cases}</p>
        <p>New Negatives: {this.state.negatives}</p>
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

export default StateCurrent
