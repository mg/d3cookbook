import React from 'react'
import ReactFauxDOM from 'react-faux-dom'
import d3 from 'd3'
import { hbar, box } from '../styles'

export default class ObjectAsData extends React.Component {
  render() {
    let chart = ReactFauxDOM.createElement('div')
    let bars= d3.select(chart).selectAll('div').data(this.state.data)

    bars
      .enter()
      .append('div')
      .style(hbar)

    bars
      .exit()
      .remove()

    bars
      .style(hbar)
      .style('width', d => (d.width * 5) + 'px')
      .style('background-color', d => this.colorScale(d.color))
      .text(d => d.width)

    return (
      <div>
        <h2>Object as data</h2>
        {React.cloneElement(chart.toReact(), {style: box})}
      </div>
    )
  }

  componentDidMount() {
    this.interval= setInterval(() => {
      let data= this.state.data
      data.shift()
      data.push({width: Math.round(Math.random() * 100), color: Math.round(Math.random() * 100)})
      this.setState({data: [...data]})
    }, 500)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  constructor(props) {
    super(props)
    this.colorScale= d3.scale.linear().domain([0, 100]).range(['#add8e6', 'blue']),

    this.state= {
      data: [
        {width: 10, color: 23},
        {width: 15, color: 33},
        {width: 30, color: 40},
        {width: 50, color: 60},
        {width: 80, color: 23},
        {width: 65, color: 10},
        {width: 55, color: 5},
        {width: 30, color: 30},
        {width: 60, color: 60},
        {width: 10, color: 90},
        {width: 8, color: 10},
      ]
    }
  }
}
