import React from 'react'
import CustomInterpolation from './custom-interpolation.jsx'
import ObjectInterpolation from './object-interpolation.jsx'
import ColorInterpolation from './color-interpolation.jsx'
import StringInterpolation from './string-interpolation.jsx'
import QuantativeScale from './quantative-scale.jsx'
import TimeScale from './time-scale.jsx'
import OrdinalScale from './ordinal-scale.jsx'

export default class All extends React.Component {
  render() {
    return (
      <div>
        <h1>Chapter 4</h1>
        <CustomInterpolation/>
        <ObjectInterpolation/>
        <ColorInterpolation/>
        <StringInterpolation/>
        <OrdinalScale/>
        <TimeScale/>
        <QuantativeScale/>
      </div>
    )
  }
}
