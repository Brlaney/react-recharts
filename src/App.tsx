import React from 'react';
import LineGraph from '../src/components/LineGraph'
// import AreaGraph from '../src/components/AreaGraph';
// import PieGraph from './components/PieGraph';
import '../src/scss/App.scss';

// const swift = [<LineGraph />, <AreaGraph />, <PieGraph />];
// const labels = ['Line graph', 'Area graph', 'Pie chart'];

function App() {
  return (
    <div className='App'>
      <div
        id='container'
        className='uk-flex uk-flex-middle uk-flex-column uk-text-center'
      >
        <h1
          id='title'
          className='uk-heading-medium uk-heading-divider'
        >
          ReCharts Examples
        </h1>
        <h2 id='subtitle' className='uk-heading-small'>
          Line graph
        </h2>
        <div id='chart-container' className='uk-card uk-card-default uk-card-body'>
          <LineGraph />
        </div>
      </div>
    </div>
  );
}

export default App;
