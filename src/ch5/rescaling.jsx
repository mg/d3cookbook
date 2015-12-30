import React from 'react'
import ReactFauxDOM from 'react-faux-dom'
import d3 from 'd3'
import { axisText, axisLine, gridLine } from '../styles'

const margin= 25

export default class Rescaling  extends React.Component {
  render() {
    const height= 500, width= 500

    let dom = ReactFauxDOM.createElement('div')
    let svg= d3.select(dom).append('svg').attr('width', width).attr('height', height).style(axisText)

    let max= 100
    if(this.state.rescale) {
      max= Math.round(Math.random() * 100)
    }

    this.renderAxis(dom, svg, 'x', width - 2 * margin, [0, max], 'bottom',  (height - margin))
    this.renderAxis(dom, svg, 'y', height - 2 * margin, [max, 0], 'left', margin)
    this.renderGridlines(dom, 'x', 0, -(height - 2 * margin))
    this.renderGridlines(dom, 'y', height - 2 * margin, 0)

    return (
      <div>
        <h2>Rescaling</h2>
        {dom.toReact()}
        <button onClick={() => this.setState({rescale: true})}>Rescale</button>
      </div>
    )
  }

  renderAxis(dom, svg, axis, size, domain, orientation, translate) {
    const scale= d3.scale.linear().domain(domain).range([0, size])
    const theAxis= d3.svg.axis().scale(scale).tickSubdivide(1).orient(orientation)
    svg.append('g')
      .attr('class', `${axis}-axis`)
      .style(axisLine)
      .attr('transform', `translate(${margin},${translate})`)
      .call(theAxis)
    return theAxis
  }

  renderGridlines(dom, axis, x2, y2) {
    d3.select(dom).selectAll(`g.${axis}-axis g.tick`)
      .append('line')
      .style(gridLine)
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', x2)
      .attr('y2', y2)
  }

  state= {}
}
