import * as React from 'react';
import './App.css';
import CurrentDateBar from './components/containers/CurrentDateBar';
import VisibleTransactionList from './components/containers/VisibleTransactionList';

const App = () => (
  <div>
    <span>Daily Expenses</span>
    <CurrentDateBar />
    <VisibleTransactionList />
  </div>
);
export default App;
