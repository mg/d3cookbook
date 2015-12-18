import React from 'react'
import ReactFauxDOM from 'react-faux-dom'
import d3 from 'd3'
import { cell } from '../styles'

export default class OrdinalScale extends React.Component {
  render() {
    const data= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let alphabet= d3.scale.ordinal().domain(data).range(
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    )

    let doms= []
    const scales= [alphabet, d3.scale.category10(), d3.scale.category20(), d3.scale.category20b(), d3.scale.category20c()]

    scales.forEach(scale => {
      let dom= ReactFauxDOM.createElement('div')
      dom.style.setProperty('display', 'flex')
      dom.style.setProperty('align-items', 'flex-start')

      d3.select(dom).selectAll("div").data(data)
        .enter()
        .append('div')
        .style(cell)
        .style("background-color", d => scale(d).indexOf('#') >=0 ? scale(d) : 'white')
        .text(d => scale(d))

      doms.push(dom)
    })

    return (
      <div>
        <h2>Ordinal scale</h2>
          <div id="alphabet">
              <span>Ordinal Scale with Alphabet<br/></span>
              <span>Mapping [1..10] to ["a".."j"]<br/></span>
          </div>
          <div style={{height: 50}}>
            {doms[0].toReact()}
          </div>

          <div id="category10">
              <span>Ordinal Color Scale Category 10<br/></span>
              <span>Mapping [1..10] to category 10 colors<br/></span>
          </div>
          <div style={{height: 50}}>
            {doms[1].toReact()}
          </div>

          <div id="category20">
              <span>Ordinal Color Scale Category 20<br/></span>
              <span>Mapping [1..10] to category 20 colors<br/></span>
          </div>
          <div style={{height: 50}}>
            {doms[2].toReact()}
          </div>

          <div id="category20b">
              <span>Ordinal Color Scale Category 20b<br/></span>
              <span>Mapping [1..10] to category 20b colors<br/></span>
          </div>
          <div style={{height: 50}}>
            {doms[3].toReact()}
          </div>

          <div id="category20c">
              <span>Ordinal Color Scale Category 20c<br/></span>
              <span>Mapping [1..10] to category 20c colors<br/></span>
          </div>
          <div style={{height: 50}}>
            {doms[4].toReact()}
          </div>
      </div>
    )
  }
}
