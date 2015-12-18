import React from 'react'
import ReactFauxDOM from 'react-faux-dom'
import d3 from 'd3'
import { cell } from '../styles'

const scales= [
  { label: 'n', scale: d3.scale.linear().domain([1, 10]).range([1, 10])}, // linear
  { label: '1 <= a*n + b <= 20', scale: d3.scale.linear().domain([1, 10]).range([1, 20])}, // linear capped
  { label: 'n^2', scale: d3.scale.pow().exponent(2)}, // pow
  { label: '1 <= a*n^2 + b <= 10', scale: d3.scale.pow().exponent(2).domain([1, 10]).rangeRound([1, 10])}, // pow capped
  { label: 'log(n)', scale: d3.scale.log()}, //log
  { label: '1 <= a*log(n) + b <= 10', scale: d3.scale.log().domain([1, 10]).rangeRound([1, 10])}, // log capped
]

export default class QuantativeScale extends React.Component {
  render() {
    return (
      <div>
        <h2>Quantative scales</h2>
        {scales.map(scale => this.renderScale(scale))}
      </div>
    )
  }

  renderScale(scale) {
    let dom = ReactFauxDOM.createElement('div')
    dom.style.setProperty('display', 'flex')
    dom.style.setProperty('align-items', 'flex-start')
    let cells= d3.select(dom).selectAll('div').data(this.state.data)

    cells
      .enter()
      .append('div')
      .style(cell)
      .text(d => d3.round(scale.scale(d), 2) + '')

    return (
      <div key={scale.label} style={{clear: 'both'}}>
        {dom.toReact()}
        <span>{scale.label}</span>
      </div>
    )
  }

  constructor(props) {
    super(props)
    this.state= {
      data: []
    }
    for(let i= 1; i < 11; i++) this.state.data.push(i)
  }
}
