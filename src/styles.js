function toD3Style(style) {
  let d3Style= {}
  Object.keys(style).forEach(key => {
    let value= style[key]
    key= key.split().map(c => {
      if(c === c.toUpperCase()) {
        return '-' + c.toLowerCase()
      }
      return c
    }).join('')
    if(Number.isInteger(value)) {
      value= value + 'px'
    }
    d3Style[key]= value
  })
  return d3Style
}

let hbar= toD3Style({
  minHeight: 15,
  minWidth: 10,
  backgroundColor: 'steelblue',
  marginBottom: 2,
  fontSize: 11,
  color: '#f0f8ff',
  textAlign: 'right',
  paddingRight: 2,
})

let vbar= toD3Style({
    minHeight: 1,
    minWidth: 30,
    backgroundColor: '#4682b4',
    marginRight: 2,
    fontSize: 10,
    color: '#f0f8ff',
    textAlign: 'center',
    width: 10,
    display: 'inline-block',
})

let cell= toD3Style({
    minWidth: 40,
    minHeight: 20,
    margin: 5,
    textAlign: 'center',
    border: '#969696 solid thin',
    padding: 5,
})

let fixedCell= toD3Style({
    minWidth: 40,
    minHeight: 20,
    margin: 5,
    textAlign: 'center',
    border: '#969696 solid thin',
    padding: 5,
})

let box = {
  border: '1px solid silver',
  padding: 5,
}

const axisLine= toD3Style({
  fill: 'none',
  stroke: '#000',
  shapeRendering: 'crispEdges',
})

const axisText= toD3Style({
  font: '10px sans-serif',
})

const axisGridLine= toD3Style({
  stroke: 'black',
  shapeRendering: 'crispEdges',
  strokeOpacity: '.2',
})

export { hbar, vbar, cell, fixedCell, box, axisLine, axisText, axisGridLine }
