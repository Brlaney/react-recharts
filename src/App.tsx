import React from 'react';
import LineGraph from './components/LineGraph'
import AreaGraph from './components/AreaGraph';
import PieGraph from './components/PieGraph';
// import SyncedGraph from './components/SyncedGraph'
import Carousel from './components/Carousel';
import './scss/App.scss';


function App() {
  // const [index, setIndex] = useState<number>(1);
  return (
    <div className='App'>
      <div
        id='container'
        className='uk-flex uk-flex-middle uk-flex-column uk-text-center'
      >
        <div id='chart-container' className='uk-card uk-card-default uk-card-body'>
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
  );
}

export default App;
