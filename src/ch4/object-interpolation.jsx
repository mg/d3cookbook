import React from 'react'
import ReactFauxDOM from 'react-faux-dom'
import d3 from 'd3'
import { vbar } from '../styles'

const max = 20

export default class ObjectInterpolation extends React.Component {
  render() {
    let data = []

    const compoundScale= d3.scale.pow().exponent(2).domain([0, max]).range([
      {color:"#add8e6", height:"15px"},
      {color:"#4169e1", height:"150px"},
    ])

    for(let i= 0; i < max; ++i)
      data.push(i)

    let dom = ReactFauxDOM.createElement('div')

    d3.select(dom).selectAll('div').data(data)
      .enter().append('div').style(vbar).style('height', d => compoundScale(d).height).style('background-color', d => compoundScale(d).color)
      .append('span').text((d,i) => i+1)

    return (
      <div>
        <h2>Compound object interpolation</h2>
        {dom.toReact()}
      </div>
    )
  }
}
