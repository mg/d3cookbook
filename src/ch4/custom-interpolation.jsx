/*
https://github.com/mbostock/d3/wiki/Transitions#d3_interpolators
*/

import React from 'react'
import ReactFauxDOM from 'react-faux-dom'
import d3 from 'd3'
import { cell } from '../styles'

const max = 20

export default class CustomInterpolation extends React.Component {
  render() {
    const dollarScale= d3.scale.linear().domain([0, 13]).range(["$0", "$300"])
    const alphabetScale= d3.scale.linear().domain([0, 27]).range(["a", "z"])

    function renderScale(scale) {
      let data = []
      let max= scale.domain()[1]

      for (var i = 0; i < max; ++i)
        data.push(i)

      let dom = ReactFauxDOM.createElement('div')
      dom.style.setProperty('display', 'flex')
      dom.style.setProperty('align-items', 'flex-start')

      d3.select(dom).selectAll('div').data(data)
        .enter().append('div').style(cell)
        .append('span').text((d,i) => scale(d))

      return dom.toReact()
    }

    return (
      <div>
        <h2>Custom interpolation</h2>
        <div>{renderScale(dollarScale)}</div>
        <div>{renderScale(alphabetScale)}</div>
      </div>
    )
  }

  constructor() {
    super()

    d3.interpolators.push((a, b) => {
      let re = /^\$([0-9,.]+)$/, ma, mb, f = d3.format(",.02f")

      if((ma = re.exec(a)) && (mb = re.exec(b))) {
        a = parseFloat(ma[1])
        b = parseFloat(mb[1]) - a
        return t => "$" + f(a + b * t)
      }
    })

    d3.interpolators.push((a, b) => {
      let re = /^([a-z])$/, ma, mb
      if((ma = re.exec(a)) && (mb = re.exec(b))) {
        a = a.charCodeAt(0)
        let delta = a - b.charCodeAt(0)
        return t => String.fromCharCode(Math.ceil(a - delta * t))
      }
    })
  }
}
