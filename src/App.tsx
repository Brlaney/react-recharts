import React from 'react';
import LineRechartComponent from '../src/components/LineRechartComponent'
import AreaRechartComponent from '../src/components/AreaRechartComponent';
import PieRechartComponent from '../src/components/PieRechartComponent';
import '../src/scss/App.scss';


function App() {
  return (
    <div className='App'>
      <h2>Line Rechart</h2>
      <LineRechartComponent />

      <h2>Area Rechart</h2>
      <AreaRechartComponent />

      <h2>Pie Rechart</h2>
      <PieRechartComponent />

    </div>
  );
}

export default App;