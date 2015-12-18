import React from 'react'
import ReactFauxDOM from 'react-faux-dom'
import d3 from 'd3'
import { hbar, box } from '../styles'

export default class ArrayAsData extends React.Component {
  render() {
    let chart = ReactFauxDOM.createElement('div')
    let bars= d3.select(chart).selectAll('div').data(this.state.data)

    bars
      .enter()
      .append('div')
      .style(hbar)

    bars
      .style('width', d => (d*3) + 'px')
      .text(d => d)

    bars
      .exit()
      .remove()

    return (
      <div>
        <h2>Array as data</h2>
        {React.cloneElement(chart.toReact(), {style: box})}
      </div>
    )
  }

  componentDidMount() {
    this.interval= setInterval(() => {
      let data= this.state.data
      data.shift()
      data.push(Math.round(Math.random() * 100))
      this.setState({data: [...data]})
    }, 500)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  constructor(props) {
    super(props)
    this.state= {
      data: [10, 15, 30, 30, 80, 65, 55, 30, 20, 10, 8]
    }
  }
}
