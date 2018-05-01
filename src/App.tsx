import * as React from 'react';
import './App.css';
import CurrentDateBar from './components/containers/CurrentDateBar';

const App = () => (
  <div>
    <span>Daily Expenses</span>
    <CurrentDateBar />
  </div>
);
export default App;
