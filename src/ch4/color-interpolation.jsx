import React from 'react'
import ReactFauxDOM from 'react-faux-dom'
import d3 from 'd3'
import { cell } from '../styles'

const max = 20

export default class ColorInterpolation extends React.Component {
  render() {
    let data = []
    const colorScale = d3.scale.linear().domain([0, max]).range([
       'white',
       '#4169e1',
    ])

    for(let i= 0; i < max; ++i)
      data.push(i)

    function renderScale(scale) {
      let dom = ReactFauxDOM.createElement('div')
      dom.style.setProperty('display', 'flex')
      dom.style.setProperty('align-items', 'flex-start')

      d3.select(dom).selectAll('div').data(data)
        .enter().append('div').style(cell).style('background-color', d => scale(d))
        .append('span').text((d,i) => i+1)

      return dom
    }

    function divergingColorScale(pivot) {
      let divergingColorScale = d3.scale.linear()
        .domain([0, pivot, max])
        .range(["white", "#4169e1", "white"]);
      return divergingColorScale;
    }

    return (
      <div>
        <h2>Color interpolation</h2>
          <div>{renderScale(colorScale).toReact()}</div>
          <div>{renderScale(divergingColorScale(this.state.pivot)).toReact()}</div>
        <div>
          <button onClick={() => this.setState({pivot: 5})}>Pivot at 5</button>
          <button onClick={() => this.setState({pivot: 10})}>Pivot at 10</button>
          <button onClick={() => this.setState({pivot: 15})}>Pivot at 15</button>
          <button onClick={() => this.setState({pivot:20})}>Pivot at 20</button>
        </div>
      </div>
    )
  }

  state= {
    pivot: 5,
  }
}
