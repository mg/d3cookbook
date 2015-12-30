import React from 'react'
import GridLines from './gridlines.jsx'
import CustomTicks from './customticks.jsx'
import BasicAxes from './basicaxes.jsx'

export default class All extends React.Component {
  render() {
    return (
      <div>
        <h1>Chapter 5</h1>
        <GridLines/>
        <CustomTicks/>
        <BasicAxes/>
      </div>
    )
  }
}
