import React from 'react'
import { render } from 'react-dom'

import App from './App'
import title from './data/data.json'

render(<App data={title.title} />, document.querySelector('#app'))
