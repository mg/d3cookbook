import React from 'react'
import ReactFauxDOM from 'react-faux-dom'
import d3 from 'd3'
import { axisLine } from '../styles'

export default class CustomTicks  extends React.Component {
  render() {
    const height= 100,
          width= 500,
          margin= 25,
          axisWidth= width - 2 * margin

    let dom = ReactFauxDOM.createElement('div')
    let svg= d3.select(dom).append('svg').attr('width', width).attr('height', height)
    let scale= d3.scale.linear().domain([0, 100]).range([0, axisWidth])
    let axis= d3.svg.axis()
      .scale(scale)
      .ticks(5)
      .tickSubdivide(4)
      .tickPadding(10)
      .tickFormat(v => v + '%')

    svg.append('g').attr('transform', `translate(${margin},${margin})`).style(axisLine).call(axis)

    return (
      <div>
        <h2>Custom Ticks</h2>
        {dom.toReact()}
      </div>
    )
  }
}
