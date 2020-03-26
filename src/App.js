import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './App.css';

import Header from './components/Header/Header';
import Balance from './components/Balance/Balance';
import IncomeExpenses from './components/IncomeExpenses/IncomeExpenses';
import TransactionList from './components/TransactionList/TransactionList';
import AddTransaction from './components/AddTransaction/AddTransaction';

import reducer from './store/reducer/reducer';

const store = createStore(reducer);

function App() {
	return (
		<Provider store={store}>
			<Header />
			<div className='container'>
				<Balance />
				<IncomeExpenses />
				<TransactionList />
				<AddTransaction />
			</div>
		</Provider>
	);
}

export default App;
