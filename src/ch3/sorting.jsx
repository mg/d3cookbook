import React from 'react'
import ReactFauxDOM from 'react-faux-dom'
import d3 from 'd3'
import { hbar, box } from '../styles'

function byExpense(a, b) {
  if(a.expense < b.expense) return -1
  if(a.expense > b.expense) return 1
  return 0
}

function byCategory(a, b) {
  return a.category < b.category ? -1 : 1
}

export default class Sorting extends React.Component {
  render() {
    let data= [...this.state.data]
    if(this.state.comparator) data.sort(this.state.comparator)

    let chart = ReactFauxDOM.createElement('div')
    let bars= d3.select(chart).selectAll('div').data(data)

    bars
      .enter()
      .append('div')
      .style(hbar)

    bars
      .exit()
      .remove()

    bars
      .style('width', d => (d.expense * 5)+ 'px')
      .text(d => d.category)

    return (
      <div>
        <h2>Sorting data</h2>
        {React.cloneElement(chart.toReact(), {style: box})}
        <button onClick={this.sort.bind(this, byExpense)}>Sort by Expense</button>
        <button onClick={this.sort.bind(this, byCategory)}>Sort by Category</button>
        <button onClick={this.sort.bind(this, undefined)}>Clear</button>
      </div>
    )
  }

  sort(comparator) {
    this.setState({comparator: comparator})
  }

  constructor(props) {
    super(props)

    this.state= {
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
