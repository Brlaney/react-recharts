import React, { useState } from 'react';

// import LineGraph from '@/components/LineGraph'
// import AreaGraph from '@/components/AreaGraph';
// import PieGraph from '@/components/PieGraph';

import '@/styles/App.scss';
import Try from './components/SyncedGraph'

// const swift = [<LineGraph />, <AreaGraph />, <PieGraph />];
// const labels = ['Line graph', 'Area graph', 'Pie chart'];


function App() {
  const [index, setIndex] = useState<number>(1);

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
          Synced graph
        </h2>
        <div id='chart-container' className='uk-card uk-card-default uk-card-body'>
          <Try />
        </div>
      </div>
    </div>
  );
}

export default App;
