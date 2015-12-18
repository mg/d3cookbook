import React from 'react'
import ReactFauxDOM from 'react-faux-dom'
import d3 from 'd3'
import { cell } from '../styles'

export default class StringInterpolation extends React.Component {
  render() {
    const max = 10, data = []
    const sizeScale = d3.scale.linear().domain([0, max]).range([
       'italic bold 12px/30px Georgia, serif',
       'italic bold 120px/180px Georgia, serif',
    ])

    for(let i= 0; i < max; ++i)
      data.push(i)

    let dom = ReactFauxDOM.createElement('div')
    dom.style.setProperty('display', 'flex')
    dom.style.setProperty('align-items', 'flex-start')
    let cells= d3.select(dom).selectAll('div').data(data)

    cells
      .enter()
      .append('div')
      .style(cell)
      .append('span')

    cells
      .select('span')
      .style('font', (d, i) => sizeScale(d))
      .text((d,i) => i+1)

    return (
      <div>
        <h2>String interpolation</h2>
        {dom.toReact()}
      </div>
    )
  }
}
