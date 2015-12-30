import React from 'react'
import ReactFauxDOM from 'react-faux-dom'
import d3 from 'd3'
import { axisLine, gridLine } from '../styles'

const margin= 25

export default class GridLines  extends React.Component {
  render() {
    const height= 500,
          width= 500

    let dom = ReactFauxDOM.createElement('div')
    let svg= d3.select(dom).append('svg').attr('width', width).attr('height', height)

    this.renderAxis(dom, svg, 'x', width - 2 * margin, [0, 100], 'bottom', 0, -(height - 2 * margin),  (height - margin))
    this.renderAxis(dom, svg, 'y', height - 2 * margin, [100, 0], 'left', height - 2 * margin, 0, margin)

    return (
      <div>
        <h2>Grid lines</h2>
        {dom.toReact()}
      </div>
    )
  }

  renderAxis(dom, svg, axis, size, domain, orientation, x2, y2, translate) {
    const scale= d3.scale.linear().domain(domain).range([0, size])
    const theAxis= d3.svg.axis().scale(scale).orient(orientation)
    svg.append('g')
      .attr('class', `${axis}-axis`)
      .style(axisLine)
      .attr('transform', `translate(${margin},${translate})`)
      .call(theAxis)

    d3.select(dom).selectAll(`g.${axis}-axis g.tick`)
      .append('line')
      .style(gridLine)
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', x2)
      .attr('y2', y2)
  }
}
