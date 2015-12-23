import React from 'react'
import ReactFauxDOM from 'react-faux-dom'
import d3 from 'd3'
import { axisLine } from '../styles'

export default class BasicAsex  extends React.Component {
  render() {

    const axisWidth = 500 - 2 * 25

    let dom = ReactFauxDOM.createElement('div')
    let svg= d3.select(dom).append('svg').attr('width', 500).attr('height', 500)

    this.renderGroup(svg, d3.scale.linear().domain([0, 1000]).range([0, axisWidth]), 1, this.state.render)
    this.renderGroup(svg,d3.scale.pow().exponent(2).domain([0, 1000]).range([0, axisWidth]), 2, this.state.render)
    this.renderGroup(svg,d3.time.scale().domain([new Date(2012, 0, 1), new Date()]).range([0, axisWidth]), 3, this.state.render)

    return (
      <div>
        <h2>Basic Axes</h2>

        <div style={{display: 'flex'}}>
          <button onClick={() => this.setState({render: 'bottom'})}>Bottom</button>
          <button onClick={() => this.setState({render: 'top'})}>Top</button>
          <button onClick={() => this.setState({render: 'left'})}>Left</button>
          <button onClick={() => this.setState({render: 'right'})}>Right</button>
        </div>

        {dom.toReact()}

      </div>
    )
  }

  renderGroup(svg, scale, i, orient) {
    const axis= d3.svg.axis().scale(scale).orient(orient).ticks(5)

    const offset= 100
    const margin= 25

    var transform
    if(['top', 'bottom'].indexOf(orient) >= 0) {
      transform= `translate(${margin},${i * offset})`
    } else {
      transform= `translate(${i * offset},${margin})`
    }

    svg.append('g').attr('transform', transform).style(axisLine).call(axis)
  }

  state= {
    render: 'bottom',
  }
}
