import React from 'react'
import ReactFauxDOM from 'react-faux-dom'
import d3 from 'd3'
import { vbar, box } from '../styles'

let data= []
function next(x) {
  return 15 + x * x
}

function newData() {
  data.push(next)
  return data
}

export default class FunctionAsData extends React.Component {
  render() {
    let chart = ReactFauxDOM.createElement('div')
    let bars= d3.select(chart).selectAll('div').data(newData)

    bars
      .enter()
      .append('div')

    bars
      .exit()
      .remove()

    bars
      .style(vbar)
      .style('height', (d, i) => d(i) + 'px')
      .text((d, i) => d(i))

    return (
      <div>
        <h2>Functions as data</h2>
        {React.cloneElement(chart.toReact(), {style: box})}
      </div>
    )
  }

  componentDidMount() {
    let count= 0
    this.interval= setInterval(() => {
      this.forceUpdate()
      count++
      if(count > 20) clearInterval(this.interval)
    }, 1500)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
}
