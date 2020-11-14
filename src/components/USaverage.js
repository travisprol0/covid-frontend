import React from "react"

class USaverage extends React.Component {
  state = { data: [] }

  componentDidMount() {
    fetch("https://api.covidtracking.com/v1/us/daily.json")
      .then((response) => response.json())
      .then((data) => this.filterData(data))
        
  }

  filterData = (data) => {
    let sevenDays = data.slice(0, 7)
    this.setState({data: sevenDays})
    console.log(sevenDays)
  }

  newPositives = () => {
    let positives = this.state.data.map((days) => days.positive)
    console.log(positives)
    if (positives !== []){
        let sum = positives.reduce((a, b) => a + b)

        console.log(sum)
    }



  }

  render() {
    return (
      <div className="USaverageData">
        <h5>7 Day Average: </h5>
        <p>New Positives: {this.newPositives()}</p>
        <p>New Negatives: </p>
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
