import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect } from 'react-router'

import Main from './main.jsx'
import { All as Ch3 } from './ch3'
import { All as Ch4 } from './ch4'

render((
  <Router>
    <Route path='/' component={Main}>
      <IndexRedirect to='ch3'/>
      <Route path='ch3' component={Ch3} />
      <Route path='ch4' component={Ch4} />
    </Route>
  </Router>
), document.getElementById('app'))
