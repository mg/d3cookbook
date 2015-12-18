import React from 'react'
import ArrayAsData from './arrayasdata.jsx'
import ObjectAsData from './objectasdata.jsx'
import FunctionAsData from './functionasdata.jsx'
import Filtering from './filtering.jsx'
import Sorting from './sorting.jsx'

export default class All extends React.Component {
  render() {
    return (
      <div>
        <h1>Chapter 3</h1>
        <ArrayAsData/>
        <ObjectAsData/>
        <FunctionAsData/>
        <Filtering/>
        <Sorting/>
      </div>
    )
  }
}
