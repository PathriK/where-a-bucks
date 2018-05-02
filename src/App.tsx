import * as React from 'react';
import './App.css';
import AddTransaction from './components/containers/AddTransaction';
import CurrentBalanceBar from './components/containers/CurrentBalanceBar';
import CurrentDateBar from './components/containers/CurrentDateBar';
import VisibleTransactionList from './components/containers/VisibleTransactionList';

const App = () => (
  <div>
    <span>Daily Expenses</span>
    <CurrentDateBar />
    <CurrentBalanceBar />
    <VisibleTransactionList />
    <AddTransaction />
  </div>
);
export default App;
