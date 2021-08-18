import React, { useState } from 'react'
// import SyncedGraph from './components/SyncedGraph'
import LineGraph from './components/LineGraph'
import AreaGraph from './components/AreaGraph'
import PieGraph from './components/PieGraph'
import Carousel from './components/Carousel'
import useMediaQuery from './lib/hooks/useMediaQuery'
import './scss/App.scss'

const titles = [
  'Opiod Overdoses in the United States',
  'Covid-19 Data in Tennessee',
  'Sample Pie Chart'
]

const App = () => {
  const [title] = useState<string>(titles[0])
  const isDesktop = useMediaQuery('(min-width: 960px)')
  // [title, setTitle]

  return (
    <div className='App'>
      <h1 id='chart-title'>
        {title}
      </h1>
      <div
        id='container'
        className='uk-flex uk-flex-middle uk-flex-column uk-text-center'
      >
        <div
          id='chart-container'
          className='uk-card uk-card-default uk-card-body uk-box-shadow-large'
        >
          <div className='parent'>
            <Carousel>
              <LineGraph />
              <AreaGraph />
              <PieGraph />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
