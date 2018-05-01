import * as React from 'react';
import './App.css';
import AddTransaction from './components/containers/AddTransaction';
import CurrentDateBar from './components/containers/CurrentDateBar';
import VisibleTransactionList from './components/containers/VisibleTransactionList';

const App = () => (
  <div>
    <span>Daily Expenses</span>
    <CurrentDateBar />
    <VisibleTransactionList />
    <AddTransaction />
  </div>
);
export default App;
