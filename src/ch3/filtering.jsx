import React from 'react'
import ReactFauxDOM from 'react-faux-dom'
import d3 from 'd3'
import { hbar, box } from '../styles'

export default class Filtering extends React.Component {
  render() {
    let chart = ReactFauxDOM.createElement('div')
    let bars= d3.select(chart).selectAll('div').data(this.state.data)

    bars
      .enter()
      .append('div')
      .style(hbar)

    bars
      .exit()
      .remove()

    bars
      .style(hbar)
      .style('width', d => (d.expense * 5)+ 'px')
      .text(d => d.category)

    bars
      .filter(d => d.category === this.state.category)
      .style('background-color', '#f08080')

    return (
      <div>
        <h2>Filtering data</h2>
        {React.cloneElement(chart.toReact(), {style: box})}
        <button onClick={this.select.bind(this, 'Retail')}>Retail</button>
        <button onClick={this.select.bind(this, 'Gas')}>Gas</button>
        <button onClick={this.select.bind(this, 'Dining')}>Dining</button>
        <button onClick={this.select.bind(this, '')}>Clear</button>
      </div>
    )
  }

  select(category) {
    this.setState({category})
  }

  constructor(props) {
    super(props)

    this.state= {
      category: '',
      data: [
        {expense: 10, category: 'Retail'},
        {expense: 15, category: 'Gas'},
        {expense: 30, category: 'Retail'},
        {expense: 50, category: 'Dining'},
        {expense: 80, category: 'Gas'},
        {expense: 65, category: 'Retail'},
        {expense: 55, category: 'Gas'},
        {expense: 30, category: 'Dining'},
        {expense: 20, category: 'Retail'},
        {expense: 10, category: 'Dining'},
        {expense: 8, category: 'Gas'},
      ]
    }
  }
}
