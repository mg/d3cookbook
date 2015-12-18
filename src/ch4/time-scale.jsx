import React from 'react'
import ReactFauxDOM from 'react-faux-dom'
import d3 from 'd3'
import { fixedCell } from '../styles'

export default class TimeScale extends React.Component {
  render() {
    let dom = ReactFauxDOM.createElement('div')
    dom.style.setProperty('display', 'flex')
    dom.style.setProperty('align-items', 'flex-start')
    let cells= d3.select(dom).selectAll('div').data(this.state.data)

    cells
      .enter()
      .append('div')
      .style(fixedCell)
      .style('font-size', 10)
      .text(d => {
        let format= d3.time.format('%x')
        return format(d) + '-' + this.time(d) + 'px'
      })

    return (
      <div>
        <h2>Time scale</h2>
        <div>Linear Time Progression</div>
        <div>Mapping [01/01/2013, 12/31/2013] to [0, 1200]</div>
        <div style={{display: 'flex', height: 45}}>
          {dom.toReact()}
        </div>
      </div>
    )
  }

  constructor(props) {
    super(props)
    this.state= {
      data: []
    }

    const start= new Date(2013, 0, 1),
          end= new Date(2013, 11, 31),
          range= [0, 1200]

    this.time= d3.time.scale().domain([start, end]).rangeRound(range)

    for(let i= 0; i < 12; i++) {
      let date= new Date(start.getTime())
      date.setMonth(start.getMonth() + i)
      this.state.data.push(date)
    }
  }
}
